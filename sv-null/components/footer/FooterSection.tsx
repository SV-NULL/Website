import React from "react";

type Props = {
  title: string;
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
};

const FooterSection = ({ title, className, as, children }: Props) => {
  const Component = as || "div";

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <Component className={className}>{children}</Component>
    </div>
  );
};

export default FooterSection;
