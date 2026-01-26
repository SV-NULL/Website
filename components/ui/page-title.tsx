export type Props = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <header className="w-full mb-24 mt-16">
      <div className="lg:max-w-4xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>
          <div
            className="h-1 bg-yellow-400 mb-3 opacity-0"
            style={{
              width: "4rem",
              transform: "translateX(-40px)",
              animation: "slideFadeIn 0.5s ease-out forwards",
            }}
          />
          <h1 className="text-4xl lg:text-6xl font-bold text-white max-w-80">
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="text-gray-400 lg:text-base mt-4 lg:mt-0 lg:ml-24 max-w-80">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
