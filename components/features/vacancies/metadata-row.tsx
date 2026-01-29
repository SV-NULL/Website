import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value?: string;
};

const MetadataRow = ({ icon: Icon, label, value }: Props) => {
  if (!value) return null;
  return (
    <div className="flex items-start gap-4 py-3 border-b last:border-0 border-neutral-800">
      <div className="p-2 bg-yellow-400/10 text-yellow-400 rounded-lg">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400 font-medium">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
};

export default MetadataRow;
