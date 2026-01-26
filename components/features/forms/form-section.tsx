type Props = {
  title: string;
  children: React.ReactNode;
  description?: string;
  extraContent?: React.ReactNode;
};

const FormSection = ({ title, children, description, extraContent }: Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white underline underline-offset-12 decoration-yellow-400">
        {title}
      </h2>
      {description && <p className="text-sm text-gray-400">{description}</p>}
      {extraContent}
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

export default FormSection;
