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
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        {icon}
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
      <div
        className={`bg-linear-to-${gradientDirection} from-neutral-900/70 to-neutral-800/40 border border-neutral-700/50 rounded-2xl p-8 lg:p-12 shadow-inner`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
