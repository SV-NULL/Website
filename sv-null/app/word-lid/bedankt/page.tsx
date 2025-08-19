import Link from "next/link";

export default function BedanktPage() {
  return (
    <div className="py-8 px-4 max-w-3xl mx-auto text-white text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-green-400">Bedankt!</h1>

        <p className="text-xl text-gray-300 mb-6">
          Je aanmelding is succesvol verstuurd.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-3">Wat gebeurt er nu?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-gray-300">
                We hebben je aanmelding ontvangen en gaan deze beoordelen.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-gray-300">
                Je ontvangt binnen 3 werkdagen een bevestiging per e-mail.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <p className="text-gray-300">
                Na goedkeuring krijg je een betaalverzoek voor de contributie.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                4
              </div>
              <p className="text-gray-300">
                Welkom bij NULL! Je krijgt toegang tot onze Discord en
                activiteiten.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded shadow transition-colors"
          >
            Terug naar homepage
          </Link>

          <div>
            <Link
              href="/contact"
              className="text-yellow-400 hover:text-yellow-300 underline text-sm"
            >
              Vragen? Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
