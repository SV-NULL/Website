type Props = {
  title: string;
  description: string;
};

const FutureGoalCard = ({ title, description }: Props) => {
  return (
    <div className="group relative bg-neutral-800/30 border border-neutral-700/60 rounded-xl p-6 hover:border-yellow-400/30 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none will-change-transform" />
      <div className="relative z-10">
        <h4 className="font-bold text-white mb-3">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FutureGoalCard;
