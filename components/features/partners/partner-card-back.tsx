import Button from "@/components/ui/button";
import { Partner } from "@/types/partner";

type Props = {
  partner: Partner;
  isVisible: boolean;
};

const PartnerCardBack = ({ partner, isVisible }: Props) => {
  return (
    <div className="absolute inset-0 rotate-y-180 backface-hidden bg-neutral-900 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-white text-xl lg:text-2xl mb-2">
          {partner.title}
        </h2>
        <p className="text-gray-300 text-sm lg:text-base line-clamp-4">
          {partner.content}
        </p>
      </div>

      {partner.website && (
        <Button
          href={partner.website}
          target="_blank"
          tabIndex={isVisible ? 0 : -1}
        >
          Bekijk website
        </Button>
      )}
    </div>
  );
};

export default PartnerCardBack;
