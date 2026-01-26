import Image from "next/image";

type Props = {
  image?: string;
  title?: string;
};

const CalendarCardImage = ({ image, title }: Props) => {
  return (
    <div className="flex-shrink-0 relative z-10 w-full aspect-square sm:w-64 sm:h-64 sm:-mt-4 sm:-ml-4 sm:rounded-xl overflow-hidden shadow-lg rounded-t-xl rounded-b-none">
      {image ? (
        <Image
          width={256}
          height={256}
          src={image}
          alt={title || "Activiteit afbeelding"}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-gray-400 text-sm">
          Geen afbeelding
        </div>
      )}
    </div>
  );
};

export default CalendarCardImage;
