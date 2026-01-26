import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  icon: LucideIcon;
  children: ReactNode;
};

const ContactItem = ({ icon: Icon, children }: Props) => {
  return (
    <div className="flex items-center text-gray-400">
      <Icon className="w-6 h-6 mr-3 flex-shrink-0" />
      <span>{children}</span>
    </div>
  );
};

export default ContactItem;
