import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  className: string;
  children: React.ReactNode;
};

const NavLink = ({ href, className, children }: Props) => {
  if (!href) return <div className={className}>{children}</div>;
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
