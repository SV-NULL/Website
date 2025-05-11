export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">SV. NULL</h1>
        <h2 className="text-xl text-gray-600">De studievereniging voor HBO-ICT op de CHE</h2>
        {/* TODO: Dynamische woorden laten roteren */}
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Onze Waardes</h3>
        <p className="mb-2 max-w-xl mx-auto">Als studievereniging staan wij voor:</p>
        <ul className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <li className="bg-yellow-400 p-4 rounded shadow">Networking</li>
          <li className="bg-yellow-400 p-4 rounded shadow">Undertaking</li>
          <li className="bg-yellow-400 p-4 rounded shadow">Lifelong Learning</li>
        </ul>
      </section>

      <section className="text-center text-gray-500">
        <p>Meer secties komen hier nog… 🚧</p>
      </section>
    </main>
  );
}