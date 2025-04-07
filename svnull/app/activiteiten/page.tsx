import { activities } from "@/lib/activities";
import { dateTolocalString } from "@/utils/date";
import Link from "next/link";

const ActivitiesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Activiteiten</h1>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.slug}>
            <Link href={`/activiteiten/${activity.slug}`}>
              <div className="p-4 border rounded hover:bg-gray-100 hover:text-yellow-500 transition">
                <h2 className="text-xl font-semibold">{activity.title}</h2>
                <p className="text-sm text-gray-500">
                  {dateTolocalString(activity.date)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesPage;
