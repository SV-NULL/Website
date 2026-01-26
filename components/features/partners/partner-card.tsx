"use client";

import { Partner } from "@/types/partner";
import clsx from "clsx";
import { KeyboardEvent, useState } from "react";
import PartnerCardBack from "./partner-card-back";
import PartnerCardFront from "./partner-card-front";

type Props = {
  partner: Partner;
};

const PartnerCard = ({ partner }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div
      className="group w-full aspect-square perspective cursor-pointer"
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={`Bekijk details van ${partner.title}`}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-600 transform-style-preserve-3d will-change-transform",
          "[@media(hover:hover)]:group-hover:rotate-y-180",
          isFlipped && "rotate-y-180",
        )}
      >
        <PartnerCardFront image={partner.image} title={partner.title} />
        <PartnerCardBack partner={partner} isVisible={isFlipped} />
      </div>
    </div>
  );
};

export default PartnerCard;
