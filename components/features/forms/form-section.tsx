type Props = {
  title: string;
  children: React.ReactNode;
  description?: string;
  extraContent?: React.ReactNode;
};

const FormSection = ({ title, children, description, extraContent }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-7 bg-yellow-400 rounded-full shrink-0" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {description && (
        <p className="text-sm text-gray-400 pl-4">{description}</p>
      )}
      {extraContent}
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

export default FormSection;
