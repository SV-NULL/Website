import { ActivityItem, ActivityItemFrontmatterSchema } from "@/types/calendar";

import { loadMarkdownFiles } from "../loader";

/**
 * Maps markdown file data to an ActivityItem.
 *
 * @param filename The name of the markdown file.
 * @param data The frontmatter data extracted from the markdown file.
 * @param content The content of the markdown file.
 * @returns An ActivityItem object.
 */
function mapToActivityItem(
  _filename: string,
  data: Record<string, unknown>,
  content: string,
): ActivityItem {
  if (data.registerURL) {
    if (!data.registerUrl) {
      data.registerUrl = data.registerURL;
    }
    delete data.registerURL;
  }
  const validatedData = ActivityItemFrontmatterSchema.parse(data);

  return {
    ...validatedData,
    content,
  };
}

/**
 * Retrieves and returns all calendar activity items, sorted by date.
 *
 * @returns An array of ActivityItem objects sorted by date.
 */
export function getCalendarItems(): ActivityItem[] {
  return loadMarkdownFiles("calendar", mapToActivityItem)
    .filter(
      (item) => item.date && !Number.isNaN(Date.parse(item.date.toString())),
    )
    .sort(
      (a, b) => Date.parse(a.date!.toString()) - Date.parse(b.date!.toString()),
    );
}

/**
 * Retrieves and returns upcoming calendar activity items, optionally limited by
 * count.
 *
 * @param count Optional number to limit the number of upcoming items returned.
 * @returns An array of upcoming ActivityItem objects.
 */
export function getUpcomingCalendarItems(count?: number): ActivityItem[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return getCalendarItems()
    .filter((item) => {
      if (!item.date) return false;

      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      return itemDate >= now;
    })
    .slice(0, count);
}
