import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//
// ─── HOMEPAGE ────────────────────────────────────────────────────────────────
//

export interface HomePageContent {
  title: string;
  subtitle: string;
  values: { title: string }[];
  gallery: string[];
  content: string;
}

export function getHomePageContent(): HomePageContent {
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    ...(data as Omit<HomePageContent, 'content'>),
    content,
  };
}

//
// ─── DROPDOWN ITEMS (ACTIVITEITEN, PARTNERS, ETC.) ───────────────────────────
//

export interface DropdownItem {
  title: string;
  subtitle: string;
  image: string;
  category?: string;
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
      category: data.category ?? null,
      content,
    };
  });
}

// Specifiek voor activiteiten
export function getCalendarItems(): DropdownItem[] {
  return loadMarkdownItems('calendar');
}

// Specifiek voor partners (hergebruikt zelfde structuur)
export function getPartnerItems(): DropdownItem[] {
  return loadMarkdownItems('partners');
}
