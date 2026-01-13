import StepItem from "./StepItem";

type Props = {
  steps: string[];
};

const NextSteps = ({ steps }: Props) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-3">Wat gebeurt er nu?</h2>
      <div className="space-y-3 text-left">
        {steps.map((stepText, i) => (
          <StepItem key={i} stepNumber={i + 1} text={stepText} />
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
