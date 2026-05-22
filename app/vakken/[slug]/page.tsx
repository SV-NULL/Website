import { JsonLd } from "@/components/features/json-ld/json-ld";
import PageTitle from "@/components/ui/page-title";
import { siteConfig } from "@/config/site";
import { getCoursesBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { Lightbulb } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { type CollectionPage } from "schema-dts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCoursesBySlug(slug);
  if (!course) return {};

  return constructMetadata({
    title: course.title,
    description: `Dit studiejaar staat in het teken van: ${course.subtitle}. ${course.description}`,
  });
}

const EXPERTISE_COLORS: Record<string, string> = {
  DEV: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  BIT: "text-green-400 bg-green-400/10 border-green-400/20",
  UX: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  ID: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

function ExpertiseBadge({ expertise }: { expertise: string }) {
  const colors =
    EXPERTISE_COLORS[expertise.toUpperCase()] ??
    "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs font-bold tracking-wide uppercase rounded-full border ${colors} shrink-0`}
    >
      {expertise}
    </span>
  );
}

export default async function VakkenDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCoursesBySlug(slug);
  if (!course) return notFound();

  const coursesBySemester = course.courses.reduce(
    (acc, course) => {
      if (!acc[course.semester]) acc[course.semester] = [];
      acc[course.semester].push(course);
      return acc;
    },
    {} as Record<number, typeof course.courses>,
  );

  const sortedSemesters = Object.keys(coursesBySemester)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <JsonLd<CollectionPage>
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: course.title,
          description: course.description,
          url: `${siteConfig.url}/vakken/${slug}`,
          hasPart: course.courses.map((course) => ({
            "@type": "Course",
            name: course.name,
            description: course.details,
          })),
        }}
      />
      <PageTitle
        title={course.title}
        subtitle={"Dit studiejaar staat in het teken van: " + course.subtitle}
      />

      <div className="bg-linear-to-r from-neutral-900/70 to-neutral-800/40 border border-neutral-700/50 rounded-xl p-8 mb-12">
        <p className="text-gray-300 leading-relaxed text-lg">
          {course.description}
        </p>
      </div>

      <div className="space-y-8">
        {sortedSemesters.map((semesterNum) => {
          const semesterCourses = coursesBySemester[semesterNum];

          return (
            <section key={semesterNum}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-yellow-400 rounded-full shrink-0" />
                <h2 className="text-2xl font-bold text-white">
                  Semester {semesterNum}
                </h2>
                <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                  {semesterCourses.length} vak
                  {semesterCourses.length !== 1 ? "ken" : ""}
                </span>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
                {semesterCourses.map((course, i) => (
                  <details
                    key={i}
                    className="group border-b border-neutral-800 last:border-0"
                  >
                    <summary className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-neutral-800/40 transition-colors duration-200 list-none">
                      <div className="w-4 h-4 border-r-2 border-b-2 border-neutral-500 group-open:border-yellow-400 rotate-45 group-open:-rotate-135 transition-transform duration-200 shrink-0" />
                      <span className="font-semibold text-white flex-1 text-left">
                        {course.name}
                      </span>
                      {course.expertise && (
                        <ExpertiseBadge expertise={course.expertise} />
                      )}
                    </summary>

                    <div className="px-6 pb-6 pt-2 border-t border-neutral-800/60">
                      <p className="text-gray-300 leading-relaxed mb-5 ml-8">
                        {course.details}
                      </p>

                      {course.resources && course.resources.length > 0 && (
                        <div className="ml-8 bg-yellow-400/5 border border-yellow-400/15 rounded-lg px-5 py-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0" />
                            <p className="text-sm font-semibold text-yellow-400">
                              Tips & bronnen
                            </p>
                            <span className="text-xs text-gray-500 bg-neutral-800 px-2 py-0.5 rounded-full">
                              {course.resources.length}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {course.resources.map((r, j) => (
                              <li key={j} className="flex items-start gap-2.5">
                                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 shrink-0" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                  {r}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
