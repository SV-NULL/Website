"use client";

import {
  AlertTriangle,
  Bug,
  Code,
  Coffee,
  Home,
  Lightbulb,
  RefreshCw,
  Search,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const errorMessages = [
    "NullPointerException: Page not found",
    "Error 404: Pagina undefined",
    "Cannot resolve 'page' of undefined",
    "ReferenceError: pagina is not defined",
    "TypeError: Cannot read property 'content' of NULL",
  ];

  const suggestions = [
    "Probeer een git reset --hard HEAD~1 (ga terug naar de homepagina)",
    "Check je URL syntax - misschien een typo?",
    "Deze pagina is waarschijnlijk gepushed naar de /dev/null branch",
    "Misschien moet je je browser cache clearen? (Ctrl+Shift+R)",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-yellow-400 mb-4">
            <RefreshCw className="h-12 w-12 mx-auto" />
          </div>
          <p className="text-green-400 font-mono">Loading page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Error Display */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Terminal className="h-16 w-16 text-red-400" />
            <div className="text-8xl font-mono font-bold text-red-400">404</div>
            <Bug className="h-16 w-16 text-red-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            NULL Pointer Exception
          </h1>

          <div className="bg-neutral-900/80 border border-red-400/30 rounded-lg p-6 mb-8 font-mono text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                Console Error
              </span>
            </div>
            <div className="text-red-400 space-y-2">
              {errorMessages.map((error, index) => (
                <div
                  key={index}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="text-gray-500">→</span> {error}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Programming Jokes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-yellow-400" />
              <h2 className="text-xl font-bold text-yellow-400">Debug Info</h2>
            </div>
            <div className="text-left font-mono text-sm space-y-2">
              <div>
                <span className="text-blue-400">status:</span>{" "}
                <span className="text-red-400">404</span>
              </div>
              <div>
                <span className="text-blue-400">error:</span>{" "}
                <span className="text-red-400">&quot;Page not found&quot;</span>
              </div>
              <div>
                <span className="text-blue-400">suggestion:</span>{" "}
                <span className="text-green-400">
                  &quot;Try going home()&quot;
                </span>
              </div>
              <div>
                <span className="text-blue-400">coffee_level:</span>{" "}
                <span className="text-yellow-400">0.1</span> ☕
              </div>
              <div>
                <span className="text-blue-400">motivation:</span>{" "}
                <span className="text-purple-400">Math.random() * 100</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
              <h2 className="text-xl font-bold text-yellow-400">Pro Tips</h2>
            </div>
            <div className="text-left text-sm space-y-3">
              {suggestions.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span className="text-gray-300">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            <Home className="h-5 w-5" />
            return home();
          </Link>

          <Link
            href="/vakken"
            className="inline-flex items-center gap-2 bg-neutral-800 text-white border border-neutral-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-700 transition-colors"
          >
            <Search className="h-5 w-5" />
            Zoek naar vakken
          </Link>

          <button
            onClick={() => setDebugMode(!debugMode)}
            className="inline-flex items-center gap-2 bg-transparent text-gray-400 border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:text-white hover:border-gray-400 transition-colors"
          >
            <Bug className="h-5 w-5" />
            {debugMode ? "Exit Debug" : "Debug Mode"}
          </button>
        </div>

        {/* Debug Mode Easter Egg */}
        {debugMode && (
          <div className="mt-8 bg-black border border-green-400 rounded-lg p-6 font-mono text-left">
            <div className="text-green-400 mb-4">{`// DEBUG MODE ACTIVATED`}</div>
            <div className="space-y-1 text-sm">
              <div className="text-gray-400">function findPage(url) &#123;</div>
              <div className="text-gray-400 pl-4">
                const page = database.query(url);
              </div>
              <div className="text-gray-400 pl-4">
                if (page === null) &#123;
              </div>
              <div className="text-red-400 pl-8">
                throw new NotFoundException(&quot;404: Page not found&quot;);
              </div>
              <div className="text-gray-400 pl-4">&#125;</div>
              <div className="text-gray-400 pl-4">return page;</div>
              <div className="text-gray-400">&#125;</div>
              <div className="text-yellow-400 mt-4">{`// Tip: Misschien moet je gewoon naar home() gaan? 😉`}</div>
            </div>
          </div>
        )}

        {/* Fun Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex items-center justify-center gap-3 text-gray-500">
            <Coffee className="h-5 w-5" />
            <span>Powered by caffeine and questionable life choices</span>
          </div>
        </div>
      </div>
    </div>
  );
}
