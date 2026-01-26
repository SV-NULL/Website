import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const SocialLink = ({ href, icon: Icon, label }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-yellow-400 active:bg-yellow-400 transition-colors duration-200"
    >
      <Icon className="w-5 h-5 text-white group-hover:text-black group-active:text-black transition-colors" />
    </Link>
  );
};

export default SocialLink;
