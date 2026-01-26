import { siteConfig } from "@/config/site";
import {
  getBoards,
  getCommittees,
  getVacatureItems,
  getVakkenItems,
} from "@/lib/content";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    "",
    "/bestuur",
    "/commissies",
    "/contact",
    "/kalender",
    "/over-ons",
    "/partner-worden",
    "/partners",
    "/privacy-cookies",
    "/statuten",
    "/studentenwelzijn",
    "/vacatures",
    "/vakken",
    "/verenigingsdocumenten",
    "/word-lid",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes
  const boards = getBoards().map((board) => ({
    url: `${baseUrl}/bestuur/${board.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const committees = getCommittees().map((committee) => ({
    url: `${baseUrl}/commissies/${committee.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const vacancies = getVacatureItems().map((vacancy) => ({
    url: `${baseUrl}/vacatures/${vacancy.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const subjects = getVakkenItems().map((subject) => ({
    url: `${baseUrl}/vakken/${subject.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...boards, ...committees, ...vacancies, ...subjects];
}
