import { Partner } from "@/types/partner";
import Image from "next/image";

type Props = {
  image: Partner["image"];
  title: string;
};

const PartnerCardFront = ({ image, title }: Props) => {
  return (
    <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-neutral-900 p-6">
      <Image
        src={image.src}
        alt={image.alt || title}
        className="object-contain p-4"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default PartnerCardFront;
