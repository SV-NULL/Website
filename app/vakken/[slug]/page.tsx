import { JsonLd } from "@/components/features/json-ld/json-ld";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { getVakkenBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import {
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { type CollectionPage } from "schema-dts";

function CollapsibleResources({ resources }: { resources: string[] }) {
  return (
    <details className="group bg-gradient-to-r from-yellow-400/5 to-transparent border border-yellow-400/20 rounded-lg overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-yellow-400/10 transition-colors duration-200">
        <div className="flex items-center gap-3">
          <Lightbulb className="h-6 w-6 text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400">
            Handige bronnen & advies
          </h3>
          <span className="text-sm text-gray-500 bg-neutral-800 px-2 py-1 rounded-full">
            {resources.length} tip{resources.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 group-open:hidden">
            Toon tips
          </span>
          <span className="text-sm text-gray-400 hidden group-open:block">
            Verberg tips
          </span>
          <ChevronDown className="h-5 w-5 text-yellow-400 group-open:hidden transition-transform duration-200" />
          <ChevronUp className="h-5 w-5 text-yellow-400 hidden group-open:block transition-transform duration-200" />
        </div>
      </summary>

      <div className="px-6 pb-6 border-t border-yellow-400/10">
        <ul className="space-y-3 mt-4">
          {resources.map((r, j) => (
            <li key={j} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0" />
              <span className="text-gray-300 leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vak = getVakkenBySlug(slug);
  if (!vak) return {};

  return constructMetadata({
    title: vak.title,
    description: `Dit studiejaar staat in het teken van: ${vak.subtitle}. ${vak.description}`,
  });
}

export default async function VakkenDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vak = getVakkenBySlug(slug);
  if (!vak) return notFound();

  // Group courses by semester
  const coursesBySemester = vak.courses.reduce(
    (acc, course) => {
      if (!acc[course.semester]) {
        acc[course.semester] = [];
      }
      acc[course.semester].push(course);
      return acc;
    },
    {} as Record<number, typeof vak.courses>,
  );

  // Sort semesters
  const sortedSemesters = Object.keys(coursesBySemester)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <JsonLd<CollectionPage>
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: vak.title,
          description: vak.description,
          url: `${siteConfig.url}/vakken/${slug}`,
          hasPart: vak.courses.map((course) => ({
            "@type": "Course",
            name: course.name,
            description: course.details,
          })),
        }}
      />
      <PageTitle
        title={vak.title}
        subtitle={"Dit studiejaar staat in het teken van: " + vak.subtitle}
      />

      {/* Description Section */}
      <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-neutral-700 rounded-xl p-8 lg:p-10 mb-12">
        <p className="text-gray-300 leading-relaxed text-lg">
          {vak.description}
        </p>
      </div>

      {/* Semesters Section */}
      <div className="space-y-12">
        {sortedSemesters.map((semesterNum) => {
          const semesterCourses = coursesBySemester[semesterNum];

          // Group courses by expertise within semester
          const coursesByExpertise = semesterCourses.reduce(
            (acc, course) => {
              const expertise = course.expertise || "Algemeen";
              if (!acc[expertise]) {
                acc[expertise] = [];
              }
              acc[expertise].push(course);
              return acc;
            },
            {} as Record<string, typeof semesterCourses>,
          );

          return (
            <section
              key={semesterNum}
              className="bg-neutral-900/20 border border-neutral-800 rounded-2xl p-8 lg:p-10"
            >
              {/* Semester Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-neutral-700">
                <Calendar className="h-8 w-8 text-yellow-400" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Semester {semesterNum}
                </h2>
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg px-4 py-2">
                  <span className="text-yellow-400 font-medium text-sm">
                    {semesterCourses.length} vak
                    {semesterCourses.length !== 1 ? "ken" : ""}
                  </span>
                </div>
              </div>

              {/* Courses grouped by expertise */}
              <div className="space-y-8">
                {Object.entries(coursesByExpertise).map(
                  ([expertise, courses]) => (
                    <div key={expertise} className="space-y-6">
                      {/* Expertise Header (only show if there are multiple expertises or if it's not 'Algemeen') */}
                      {(Object.keys(coursesByExpertise).length > 1 ||
                        expertise !== "Algemeen") && (
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-1 w-8 bg-yellow-400 rounded-full" />
                          <h3 className="text-xl font-semibold text-yellow-400 uppercase tracking-wider">
                            {expertise}
                          </h3>
                        </div>
                      )}

                      {/* Course Cards */}
                      <div className="grid gap-6 lg:gap-8">
                        {courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6 lg:p-8 hover:bg-neutral-800/50 transition-colors duration-300"
                          >
                            {/* Course Title */}
                            <div className="flex items-start gap-3 mb-6">
                              <BookOpen className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                              <h4 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                                {course.name}
                              </h4>
                            </div>

                            {/* Course Details */}
                            <div className="bg-neutral-900/30 rounded-lg p-6 mb-6">
                              <p className="text-gray-300 leading-relaxed">
                                {course.details}
                              </p>
                            </div>

                            {/* Resources Section */}
                            <CollapsibleResources
                              resources={course.resources}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
