import { Vakken, VakkenFrontmatterSchema } from "@/types/vakken";
import { loadMarkdownBySlug, loadMarkdownFiles } from "../loader";

/**
 * Maps markdown file data to a Vakken.
 *
 * @param filename The name of the markdown file.
 * @param data The frontmatter data extracted from the markdown file.
 * @param content The content of the markdown file.
 * @returns A Vakken object.
 */
function mapToVakken(
  _filename: string,
  data: Record<string, unknown>,
  _content: string,
): Vakken {
  const validatedData = VakkenFrontmatterSchema.parse(data);
  return validatedData;
}

/**
 * Retrieves a list of Vakken items.
 *
 * @return An array of objects containing slug and Vakken data.
 */
export function getVakkenItems(): { slug: string; data: Vakken }[] {
  return loadMarkdownFiles("subjects", (filename, data, content) => ({
    slug: filename.replace(/\.md$/, ""),
    data: mapToVakken(filename, data, content),
  }));
}

/**
 * Retrieves a vakken item by its slug.
 *
 * @param slug The slug of the vakken item.
 * @return A Vakken object or null if not found.
 */
export function getVakkenBySlug(slug: string): Vakken | null {
  return loadMarkdownBySlug("subjects", slug, (data, content, slug) =>
    mapToVakken(`${slug}.md`, data, content),
  );
}
