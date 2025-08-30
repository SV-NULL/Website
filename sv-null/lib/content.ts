import { Image } from "@/types/image";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

//
// ─── KALENDER ───────────────────────────
//

export interface ActivityItem {
  title: string;
  image?: string;
  date?: string;
  notDetermined?: boolean; // optional: show "TBD" in UI if true
  content: string;
}

/** Load markdown files from content/<folder> and map to ActivityItem */
function loadActivityItems(folder: string): ActivityItem[] {
  const dir = path.join(process.cwd(), "content", folder);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        title: data.title ?? filename.replace(/\.md$/, ""),
        image: data.image ?? undefined,
        date: data.date ?? undefined,
        notDetermined:
          data.notDetermined === true || data.notDetermined === "true",
        content: content ?? "",
      } as ActivityItem;
    });
}

export function getCalendarItems(): ActivityItem[] {
  return loadActivityItems("kalender")
    .filter((item) => item.date && !Number.isNaN(Date.parse(item.date)))
    .sort((a, b) => Date.parse(a.date!) - Date.parse(b.date!));
}

export function getCalendarItemsUpcoming(): ActivityItem[] {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  return loadActivityItems("kalender")
    .filter((item) => item.date && !Number.isNaN(Date.parse(item.date)))
    .sort((a, b) => Date.parse(a.date!) - Date.parse(b.date!))
    .filter((item) => Date.parse(item.date!) >= startOfToday.getTime());
}

export function getUpcomingCalendarItems(count: number): ActivityItem[] {
  return getCalendarItems().slice(0, count);
}

//
// ─── PARTNERS ───────────────────────────
//

export interface PartnerItem {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  website?: string;
}

function loadPartnerItems(folder: string): PartnerItem[] {
  const dir = path.join(process.cwd(), "content", folder);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        title: data.title,
        subtitle: data.subtitle,
        image: data.image,
        content,
        website: data.website || "",
      };
    });
}

export function getPartnerItems(): PartnerItem[] {
  return loadPartnerItems("partners");
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
  const dir = path.join(process.cwd(), "content", "vacatures");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((file) => {
    const filePath = path.join(dir, file);
    const md = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(md);
    const slug = file.replace(/\.md$/, "");
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
  const filePath = path.join(
    process.cwd(),
    "content",
    "vacatures",
    `${slug}.md`
  );
  if (!fs.existsSync(filePath)) return null;
  const md = fs.readFileSync(filePath, "utf-8");
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
  image: Image;
  slug: string;
  content: string;
  startDate?: Date; // Enkel voor bestuur
  members?: Member[];
}

function loadListItems(folder: string): ListItem[] {
  const dir = path.join(process.cwd(), "content", folder);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const slug = filename.replace(/\.md$/, "");

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
  return loadListItems("bestuur").sort((a, b) => {
    const dateA = new Date((a as any).startDate ?? 0);
    const dateB = new Date((b as any).startDate ?? 0);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBestuurBySlug(slug: string): ListItem | null {
  const filePath = path.join(process.cwd(), "content", "bestuur", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
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
  return loadListItems("commissies");
}

export function getCommissieBySlug(slug: string): ListItem | null {
  const filePath = path.join(
    process.cwd(),
    "content",
    "commissies",
    `${slug}.md`
  );
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
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
  const dir = path.join(process.cwd(), "content", "vakken");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(dir, file);
      const md = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(md);
      return {
        slug: file.replace(/\.md$/, ""),
        data: {
          title: data.title,
          subtitle: data.subtitle || "",
          description: data.description || content.trim(),
          courses: data.courses,
        },
      };
    });
}

export function getVakkenBySlug(slug: string): VakkenItem | null {
  const filePath = path.join(process.cwd(), "content", "vakken", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const md = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(md);
  return {
    title: data.title,
    subtitle: data.subtitle || "",
    description: data.description || content.trim(),
    courses: data.courses,
  };
}
