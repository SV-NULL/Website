import { Vacature, VactureFrontmatterSchema } from "@/types/vacatures";
import { loadMarkdownBySlug, loadMarkdownFiles } from "../loader";

/**
 * Maps markdown file data to a Vacature.
 *
 * @param filename The name of the markdown file.
 * @param data The frontmatter data extracted from the markdown file.
 * @param content The content of the markdown file.
 * @returns A Vacature object.
 */
function mapToVacature(
  filename: string,
  data: Record<string, unknown>,
  content: string,
): Vacature {
  const validatedData = VactureFrontmatterSchema.parse(data);

  return {
    ...validatedData,
    content,
    slug: filename.replace(/\.md$/, ""),
  };
}

/**
 * Retrieves and returns all vacature items.
 *
 * @returns An array of Vacature objects.
 */
export function getVacatureItems(): Vacature[] {
  return loadMarkdownFiles("vacatures", mapToVacature);
}

/**
 * Retrieves and returns a vacature item by its slug.
 *
 * @param slug The slug of the vacature item.
 * @returns A Vacature object or null if not found.
 */
export function getVacatureBySlug(slug: string): Vacature | null {
  return loadMarkdownBySlug("vacatures", slug, (data, content, slug) =>
    mapToVacature(`${slug}.md`, data, content),
  );
}
