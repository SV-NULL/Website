import { Member } from "@/types/common";
import MemberCard from "./member-card";

type Props = {
  members: Member[];
  imageUrlPrefix?: string;
};

export default function Members({ members, imageUrlPrefix }: Props) {
  if (members.length === 5) {
    return <BoardLayout members={members} imageUrlPrefix={imageUrlPrefix} />;
  }

  return <StandardLayout members={members} imageUrlPrefix={imageUrlPrefix} />;
}

const BoardLayout = ({ members, imageUrlPrefix }: Props) => {
  const topRow = members.slice(0, 2);
  const bottomRow = members.slice(2, 5);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {topRow.map((member, i) => (
          <MemberCard key={i} member={member} imageUrlPrefix={imageUrlPrefix} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bottomRow.map((member, i) => (
          <MemberCard
            key={i + 2}
            member={member}
            imageUrlPrefix={imageUrlPrefix}
          />
        ))}
      </div>
    </div>
  );
};

const StandardLayout = ({ members, imageUrlPrefix }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {members.map((member, i) => (
        <MemberCard key={i} member={member} imageUrlPrefix={imageUrlPrefix} />
      ))}
    </div>
  );
};
