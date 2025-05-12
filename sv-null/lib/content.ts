import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//
// ─── HOMEPAGE ────────────────────────────────────────────────────────────────
//

export interface HomePageContent {
  title: string;
  subtitle: string;
  rotatingWords: string[];
  valuesTitle: string;
  valuesText: string;
  values: { title: string; icon: string }[];
  gallery: { src: string; caption: string }[];
  upcomingActivities: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: { text: string; href: string };
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

// Alle kalender items (unsorted)
export function getCalendarItems(): DropdownItem[] {
  return loadMarkdownItems('kalender');
}

// Alleen de eerstvolgende X activiteiten
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

// Partners
export function getPartnerItems(): DropdownItem[] {
  return loadMarkdownItems('partners');
}
