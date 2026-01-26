import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  gradientDirection: "r" | "l";
  children: ReactNode;
};

const SectionWrapper = ({
  icon,
  title,
  gradientDirection,
  children,
}: Props) => {
  const gradientClass = "from-neutral-900/50 to-neutral-800/30";

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        {icon}
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
      <div
        className={`bg-gradient-to-${gradientDirection} ${gradientClass} border border-neutral-700 rounded-2xl p-8 lg:p-12`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
