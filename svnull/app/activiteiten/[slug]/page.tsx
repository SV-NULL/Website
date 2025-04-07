import { getActivityBySlug } from "@/lib/activities";
import { dateTolocalString } from "@/utils/date";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ActivityPage = async ({ params }: Props) => {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{activity.title}</h1>
      <p className="text-sm text-yellow-500">
        {dateTolocalString(activity.date, true)}
      </p>
      <div className="mt-4">{activity.content}</div>
    </div>
  );
};

export default ActivityPage;
