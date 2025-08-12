import { Member } from "@/types/common";
import Image from "next/image";

type Props = {
  members: Member[];
  imageUrlPrefix?: string;
};

export default function Members({ members, imageUrlPrefix }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {members.map((member, i) => {
        const image = member.person.image;
        const person = member.person;

        return (
          <div
            key={i}
            className="flex flex-col items-center text-center p-4 h-full"
          >
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
      })}
    </div>
  );
}
