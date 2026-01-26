import { Vacature } from "@/types/vacatures";
import Image from "next/image";
import Link from "next/link";

type Props = {
  vacancy: Vacature;
};

const VacancyCard = ({ vacancy }: Props) => {
  return (
    <Link
      href={`/vacatures/${vacancy.slug}`}
      className="flex border border-gray-700 rounded p-4 items-center gap-4 cursor-pointer hover:border-yellow-400 hover:shadow-lg transition mt-10"
    >
      <Image
        src={vacancy.logo}
        alt={vacancy.company}
        className="w-16 h-16 object-contain"
        width={64}
        height={64}
      />
      <div>
        <h3 className="text-2xl font-semibold">{vacancy.title}</h3>
        <p className="text-sm text-gray-600">
          {vacancy.company} · {vacancy.type}
        </p>
      </div>
    </Link>
  );
};

export default VacancyCard;
