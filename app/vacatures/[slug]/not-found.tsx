import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-2xl font-bold mb-4">Vacature niet gevonden</h1>
      <Link href="/vacatures" className="text-yellow-500 hover:underline">
        Terug naar vacatures
      </Link>
    </div>
  );
};

export default NotFound;
