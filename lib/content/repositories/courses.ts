import { Courses, CoursesFrontmatterSchema } from "@/types/course";
import { loadMarkdownBySlug, loadMarkdownFiles } from "../loader";

/**
 * Maps markdown file data to a Courses.
 *
 * @param filename The name of the markdown file.
 * @param data The frontmatter data extracted from the markdown file.
 * @param content The content of the markdown file.
 * @returns A Courses object.
 */
function mapToCourses(
  _filename: string,
  data: Record<string, unknown>,
  _content: string,
): Courses {
  const validatedData = CoursesFrontmatterSchema.parse(data);
  return validatedData;
}

/**
 * Retrieves a list of Courses items.
 *
 * @return An array of objects containing slug and courses data.
 */
export function getCourses(): { slug: string; data: Courses }[] {
  return loadMarkdownFiles("subjects", (filename, data, content) => ({
    slug: filename.replace(/\.md$/, ""),
    data: mapToCourses(filename, data, content),
  }));
}

/**
 * Retrieves a courses item by its slug.
 *
 * @param slug The slug of the courses item.
 * @return A Courses object or null if not found.
 */
export function getCoursesBySlug(slug: string): Courses | null {
  return loadMarkdownBySlug("subjects", slug, (data, content, slug) =>
    mapToCourses(`${slug}.md`, data, content),
  );
}
