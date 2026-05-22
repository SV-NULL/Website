import { Vacancy, VacancyFrontmatterSchema } from "@/types/vacancy";
import { loadMarkdownBySlug, loadMarkdownFiles } from "../loader";

/**
 * Maps markdown file data to a Vacancy.
 *
 * @param filename The name of the markdown file.
 * @param data The frontmatter data extracted from the markdown file.
 * @param content The content of the markdown file.
 * @returns A Vacancy object.
 */
function mapToVacancy(
  filename: string,
  data: Record<string, unknown>,
  content: string,
): Vacancy {
  const validatedData = VacancyFrontmatterSchema.parse(data);

  return {
    ...validatedData,
    content,
    slug: filename.replace(/\.md$/, ""),
  };
}

/**
 * Retrieves and returns all vacancy items.
 *
 * @returns An array of Vacancy objects.
 */
export function getVacancies(): Vacancy[] {
  return loadMarkdownFiles("vacancies", mapToVacancy);
}

/**
 * Retrieves and returns a vacancy item by its slug.
 *
 * @param slug The slug of the vacancy item.
 * @returns A Vacancy object or null if not found.
 */
export function getVacancyBySlug(slug: string): Vacancy | null {
  return loadMarkdownBySlug("vacancies", slug, (data, content, slug) =>
    mapToVacancy(`${slug}.md`, data, content),
  );
}
