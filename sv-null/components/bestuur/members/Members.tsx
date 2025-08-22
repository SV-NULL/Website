import { Member as MemberType } from "@/types/common";
import Member from "./Member";

type Props = {
  members: MemberType[];
  imageUrlPrefix?: string;
};

export default function Members({ members, imageUrlPrefix }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {members.map((member, i) => (
        <Member key={i} member={member} imageUrlPrefix={imageUrlPrefix} />
      ))}
    </div>
  );
}
