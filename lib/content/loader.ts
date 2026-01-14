import fs from "fs";
import matter from "gray-matter";
import path from "path";

/**
 * Loads markdown files from a specified folder and maps them to a desired type.
 *
 * @param folder The folder within the "content" directory to load markdown files from.
 * @param mapper A function that maps the filename, frontmatter data, and content to the desired type T.
 * @returns An array of items of type T.
 */
export function loadMarkdownFiles<T>(
  folder: string,
  mapper: (
    filename: string,
    data: Record<string, unknown>,
    content: string,
  ) => T,
): T[] {
  const dir = path.join(process.cwd(), "content", folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return mapper(filename, data, content);
  });
}

/**
 * Loads a single markdown file by its slug and maps it to a desired type.
 *
 * @param folder The folder within the "content" directory where the markdown file is located.
 * @param slug The slug (filename without extension) of the markdown file to load.
 * @param mapper A function that maps the frontmatter data and content to the desired type T.
 * @returns An item of type T or null if the file does not exist.
 */
export function loadMarkdownBySlug<T>(
  folder: string,
  slug: string,
  mapper: (data: Record<string, unknown>, content: string, slug: string) => T,
): T | null {
  const filePath = path.join(process.cwd(), "content", folder, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return mapper(data, content, slug);
}
