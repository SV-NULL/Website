export default function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="w-full mb-24 mt-16">
      <div className="sm:max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <div
            className="h-1 bg-yellow-400 mb-3 opacity-0"
            style={{
              width: '4rem',
              transform: 'translateX(-40px)',
              animation: 'slideFadeIn 0.5s ease-out forwards',
            }}
          />
          <h1 className="text-5xl sm:text-6xl font-bold text-white max-w-80">
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="text-gray-400 sm:text-base mt-4 sm:mt-0 sm:ml-24 max-w-80">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
