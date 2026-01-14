import { Partner, PartnerFrontmatterSchema } from "@/types/partner";
import { loadMarkdownFiles } from "../loader";

/**
 * Maps markdown file data to a Partner.
 *
 * @param data The frontmatter data extracted from the markdown file.
 * @param content The content of the markdown file.
 * @returns A Partner object.
 */
export function mapToPartner(
  _filename: string,
  data: Record<string, unknown>,
  content: string,
): Partner {
  const validatedData = PartnerFrontmatterSchema.parse(data);

  return {
    ...validatedData,
    content,
  };
}

/**
 * Retrieves and returns all partner items.
 *
 * @returns An array of Partner objects.
 */
export function getPartnerItems(): Partner[] {
  return loadMarkdownFiles("partners", mapToPartner);
}
