import { Member } from "@/types/common";
import Image from "next/image";

type Props = {
  member: Member;
  imageUrlPrefix?: string;
};

const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />
  </div>
);

const MemberCard = ({ member, imageUrlPrefix = "" }: Props) => {
  const { person, role, date } = member;
  const imageSrc = `${imageUrlPrefix}${person.image.src}`;

  return (
    <article className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1">
      <BackgroundPattern />

      <div className="relative p-6 flex flex-col items-center text-center h-full">
        <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-neutral-700 group-hover:border-yellow-400 transition-all duration-300 shadow-lg">
          <Image
            src={imageSrc}
            alt={person.image.alt || person.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            priority={person.image.isPriority}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            {person.name}
          </h3>

          <div className="w-12 h-1 bg-yellow-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="text-base font-semibold text-yellow-400">{role}</p>
          <p className="text-sm text-gray-400 font-medium">{date}</p>
        </div>
      </div>
    </article>
  );
};

export default MemberCard;
