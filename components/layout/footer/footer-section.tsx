import React from "react";

type Props = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const FooterSection = ({ title, className, children }: Props) => {
  return (
    <section className="flex flex-col">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className={className}>{children}</div>
    </section>
  );
};

export default FooterSection;
