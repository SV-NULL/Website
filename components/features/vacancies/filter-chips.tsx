const TYPES = ["all", "bijbaan", "stage", "full-time"];

type Props = {
  currentFilter: string;
  onFilterChange: (type: string) => void;
};

const FilterChips = ({ currentFilter, onFilterChange }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      {TYPES.map((type) => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`px-5 py-2 rounded-xl font-medium transition-all duration-300
              ${
                currentFilter === type
                  ? "bg-yellow-400 text-black border-2 border-yellow-400"
                  : "bg-neutral-900 text-white border-2 border-neutral-800 hover:border-yellow-400 hover:text-yellow-400"
              }`}
        >
          {type === "all"
            ? "Alle"
            : type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
