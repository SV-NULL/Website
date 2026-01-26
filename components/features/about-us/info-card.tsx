import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

const InfoCard = ({ icon, title, children }: Props) => {
  return (
    <section className="group bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:bg-neutral-900/80 transition-all duration-300 hover:border-yellow-400/20">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-3xl font-bold text-yellow-400">{title}</h2>
      </div>
      <p className="text-gray-300 leading-relaxed">{children}</p>
    </section>
  );
};

export default InfoCard;
