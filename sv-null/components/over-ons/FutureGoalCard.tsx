type Props = {
  title: string;
  description: string;
};

const FutureGoalCard = ({ title, description }: Props) => {
  return (
    <div className="bg-neutral-800/30 border border-neutral-600 rounded-lg p-6">
      <h4 className="font-bold text-yellow-400 mb-3">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FutureGoalCard;
