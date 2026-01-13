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
    <div
      className="group relative bg-neutral-900 
                    rounded-xl overflow-hidden border border-neutral-800 
                    hover:border-yellow-400 transition-all duration-300 
                    hover:shadow-xl hover:shadow-yellow-400/10 
                    hover:-translate-y-1"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative p-6 flex flex-col items-center text-center h-full">
        {/* Profile Image */}
        <div
          className="relative w-48 h-48 mb-6 overflow-hidden rounded-full 
                        border-4 border-neutral-700 group-hover:border-yellow-400 
                        transition-all duration-300 shadow-lg"
        >
          <Image
            priority={image.isPriority || false}
            src={`${imageUrlPrefix || ""}${image.src}`}
            alt={image.alt || person.name}
            width={192}
            height={192}
            className="w-full h-full object-cover group-hover:scale-110 
                       transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3
            className="text-xl font-bold text-white group-hover:text-yellow-400 
                         transition-colors duration-300"
          >
            {person.name}
          </h3>
          <div
            className="w-12 h-1 bg-yellow-400 mx-auto opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"
          />
          <p className="text-base font-semibold text-yellow-400">
            {member.role}
          </p>
          <p className="text-sm text-gray-400 font-medium">{member.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
