import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  slug: string;
};

const StudyYearCard = ({ title, subtitle, slug }: Props) => {
  return (
    <Link
      key={slug}
      href={`/vakken/${slug}`}
      className="group relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 hover:border-yellow-400/50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-400/5 group-hover:to-yellow-400/10 transition-colors duration-300" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-6 flex justify-center">
          <div className="w-6 h-6 border-r-2 border-b-2 border-yellow-400/60 group-hover:border-yellow-400 transform rotate-45 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default StudyYearCard;
