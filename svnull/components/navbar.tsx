import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-yellow-500 text-black shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Studievereniging
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/activiteiten" className="hover:text-white transition">
            Activiteiten
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
