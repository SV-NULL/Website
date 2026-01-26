type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isOpen, onClick }: Props) => {
  const lineBase =
    "absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out";

  return (
    <button
      onClick={onClick}
      className="relative w-8 h-8 flex items-center justify-center md:hidden z-50"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <span
        className={`${lineBase} ${isOpen ? "rotate-45" : "-translate-y-2"}`}
      />
      <span className={`${lineBase} ${isOpen ? "opacity-0" : "opacity-100"}`} />
      <span
        className={`${lineBase} ${isOpen ? "-rotate-45" : "translate-y-2"}`}
      />
    </button>
  );
};

export default HamburgerButton;
