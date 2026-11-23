import { Member } from "@/types/common";
import Avatar from "boring-avatars";
import fs from "fs";
import Image from "next/image";
import path from "path";

type Props = {
  member: Partial<Member> & {
    photo?: string;
    name?: string;
  };
  imageUrlPrefix?: string;
};

const checkPhotoExists = (src?: string): boolean => {
  if (!src) return false;
  if (src.startsWith("http://") || src.startsWith("https://")) return true;
  try {
    const cleanPath = src.startsWith("/") ? src.slice(1) : src;
    const fullPath = path.join(process.cwd(), "public", cleanPath);
    return fs.existsSync(fullPath);
  } catch {
    return true;
  }
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

const MemberCard = ({ member: rawMember, imageUrlPrefix = "" }: Props) => {
  const member = {
    ...rawMember,
    name: rawMember.name || rawMember.person?.name,
  };
  const { person, role, date } = member;
  const rawSrc = member.photo
    ? member.photo
    : person?.image?.src
      ? `${imageUrlPrefix}${person.image.src}`
      : "";
  const imageSrc =
    rawSrc && !rawSrc.startsWith("/") && !rawSrc.startsWith("http")
      ? `/${rawSrc}`
      : rawSrc;
  const photo =
    Boolean(imageSrc) && (Boolean(member.photo) || checkPhotoExists(imageSrc));

  return (
    <article className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1">
      <BackgroundPattern />

      <div className="relative p-6 flex flex-col items-center text-center h-full">
        <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-neutral-700 group-hover:border-yellow-400 transition-all duration-300 shadow-lg flex items-center justify-center">
          {photo ? (
            <Image
              src={imageSrc}
              alt={person?.image?.alt || member.name || "Placeholder"}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              priority={person?.image?.isPriority}
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <Avatar
              size="100%"
              name={member.name || "Placeholder"}
              variant="beam"
              colors={["#FF8C00", "#FACC15", "#FFFFFF", "#EAEAEA", "#CBD5E1"]}
              className="w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            {member.name}
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
