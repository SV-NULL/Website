import { Member as MemberType } from "@/types/common";
import Image from "next/image";

type Props = {
  member: MemberType;
  imageUrlPrefix?: string;
};

const Member = ({ member, imageUrlPrefix }: Props) => {
  const image = member.person.image;
  const person = member.person;

  return (
    <div className="flex flex-col items-center text-center p-4 h-full">
      <div className="w-72 aspect-square mb-4 overflow-hidden rounded-full">
        <Image
          priority={image.isPriority || false}
          src={`${imageUrlPrefix || ""}${image.src}`}
          alt={image.alt || person.name}
          width={288}
          height={288}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-auto">{person.name}</h3>
      <p className="text-sm text-yellow-400">{member.role}</p>
      <p className="text-xs text-gray-400">{member.date}</p>
    </div>
  );
};

export default Member;
