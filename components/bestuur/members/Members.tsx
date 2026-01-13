import { Member as MemberType } from "@/types/common";
import Member from "./Member";

type Props = {
  members: MemberType[];
  imageUrlPrefix?: string;
};

export default function Members({ members, imageUrlPrefix }: Props) {
  const totalMembers = members.length;

  if (totalMembers === 5) {
    const firstRow = members.slice(0, 2);
    const secondRow = members.slice(2, 5);

    return (
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* First row: 2 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {firstRow.map((member, i) => (
            <Member key={i} member={member} imageUrlPrefix={imageUrlPrefix} />
          ))}
        </div>

        {/* Second row: 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondRow.map((member, i) => (
            <Member
              key={i + 2}
              member={member}
              imageUrlPrefix={imageUrlPrefix}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {members.map((member, i) => (
        <Member key={i} member={member} imageUrlPrefix={imageUrlPrefix} />
      ))}
    </div>
  );
}
