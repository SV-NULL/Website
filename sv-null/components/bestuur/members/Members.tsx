import { Member as MemberType } from "@/types/common";
import Member from "./Member";

type Props = {
  members: MemberType[];
  imageUrlPrefix?: string;
};

export default function Members({ members, imageUrlPrefix }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {members.map((member, i) => (
        <Member key={i} member={member} imageUrlPrefix={imageUrlPrefix} />
      ))}
    </div>
  );
}
