import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//
// ─── DROPDOWN ITEMS (KALENDER, PARTNERS, ETC.) ───────────────────────────
//

export interface DropdownItem {
  title: string;
  subtitle: string;
  image: string;
  date?: string;
  content: string;
}

function loadMarkdownItems(folder: string): DropdownItem[] {
  const dir = path.join(process.cwd(), 'content', folder);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      subtitle: data.subtitle,
      image: data.image,
      date: data.date ?? null,
      content,
    };
  });
}

export function getCalendarItems(): DropdownItem[] {
  return loadMarkdownItems('kalender');
}

export function getUpcomingCalendarItems(count: number): DropdownItem[] {
  const allItems = getCalendarItems()
    .filter((item) => item.date)
    .sort((a, b) => {
      const dateA = new Date(a.date!);
      const dateB = new Date(b.date!);
      return dateA.getTime() - dateB.getTime();
    });

  return allItems.slice(0, count);
}

export function getPartnerItems(): DropdownItem[] {
  return loadMarkdownItems('partners');
}

//
// ─── VACATURES ───────────────────────────
//
export interface VacatureItem {
  title: string;
  company: string;
  type: string;
  logo: string;
  applyUrl: string;
  content: string;
  slug: string;
}

export function getVacatureItems(): VacatureItem[] {
  const dir = path.join(process.cwd(), 'content', 'vacatures');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((file) => {
    const filePath = path.join(dir, file);
    const md = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(md);
    const slug = file.replace(/\.md$/, '');
    return {
      title: data.title,
      company: data.company,
      type: data.type,
      logo: data.logo,
      applyUrl: data.applyUrl,
      content,
      slug,
    };
  });
}

export function getVacatureBySlug(slug: string): VacatureItem | null {
  const filePath = path.join(process.cwd(), 'content', 'vacatures', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const md = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(md);
  return {
    title: data.title,
    company: data.company,
    type: data.type,
    logo: data.logo,
    applyUrl: data.applyUrl,
    content,
    slug,
  };
}

//
// ─── LIST ITEMS (Bestuur, Commissies) ───────────────────────────
//

export interface Member {
  name: string;
  role: string;
  date: string;
  image: string;
}

export interface ListItem {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  content: string;
  startDate?: Date; // Enkel voor bestuur
  members?: Member[];
}

function loadListItems(folder: string): ListItem[] {
  const dir = path.join(process.cwd(), 'content', folder);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const slug = filename.replace(/\.md$/, '');

    return {
      title: data.title,
      subtitle: data.subtitle,
      image: data.image,
      slug,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      content,
    };
  });
}

export function getBestuurItems(): ListItem[] {
  return loadListItems('bestuur').sort((a, b) => {
    const dateA = new Date((a as any).startDate ?? 0);
    const dateB = new Date((b as any).startDate ?? 0);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBestuurBySlug(slug: string): ListItem | null {
  const filePath = path.join(process.cwd(), 'content', 'bestuur', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    slug,
    content,
    members: data.members ?? [],
  };
}

export function getCommissieItems(): ListItem[] {
  return loadListItems('commissies');
}

export function getCommissieBySlug(slug: string): ListItem | null {
  const filePath = path.join(process.cwd(), 'content', 'commissies', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    slug,
    content,
    members: data.members ?? [],
  };
}

//
// ─── Vakken ─────────────────────────────────────────────────
//

export interface VakkenItem {
  title: string;
  subtitle: string;
  description: string;
  courses: {
    semester: number;
    expertise?: string | null;
    name: string;
    details: string;
    resources: string[];
  }[];
}

export function getVakkenItems(): { slug: string; data: VakkenItem }[] {
  const dir = path.join(process.cwd(), 'content', 'vakken');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(dir, file);
      const md = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(md);
      return {
        slug: file.replace(/\.md$/, ''),
        data: {
          title: data.title,
          subtitle: data.subtitle || '',
          description: data.description || content.trim(),
          courses: data.courses,
        },
      };
    });
}

export function getVakkenBySlug(slug: string): VakkenItem | null {
  const filePath = path.join(process.cwd(), 'content', 'vakken', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const md = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(md);
  return {
    title: data.title,
    subtitle: data.subtitle || '',
    description: data.description || content.trim(),
    courses: data.courses,
  };
}
