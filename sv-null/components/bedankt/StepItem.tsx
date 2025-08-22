type Props = {
  stepNumber: number;
  text: string;
};

const StepItem = ({ stepNumber, text }: Props) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
        {stepNumber}
      </div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default StepItem;
