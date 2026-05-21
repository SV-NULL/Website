import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

const InfoCard = ({ icon, title, children }: Props) => {
  return (
    <section className="group relative bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-yellow-400/30 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none will-change-transform" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          {icon}
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">{children}</p>
      </div>
    </section>
  );
};

export default InfoCard;
