import fs from "fs";
import path from "path";
import matter from "gray-matter";

const activiteitenDir = path.join(process.cwd(), "content/activiteiten");

export function getAlleActiviteitenMeta() {
  const files = fs.readdirSync(activiteitenDir);

  return files.map((filename) => {
    const filePath = path.join(activiteitenDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: data.slug,
      titel: data.titel,
      datum: data.datum,
    };
  });
}

export function getActiviteitSlugs() {
  return fs.readdirSync(activiteitenDir).map((filename) => filename.replace(/\.md$/, ""));
}
