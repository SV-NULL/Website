// File: app/documents/page.tsx
"use client";

import PageTitle from "@/components/PageTitle";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    name: "AVG‑beleid",
    file: "/documents/AVG_beleid.pdf",
  },
  {
    name: "Huisregels",
    file: "/documents/Huisregels.pdf",
  },
  {
    name: "Reglement Algemene Vergadering",
    file: "/documents/Reglement_Algemene_Vergadering.pdf",
  },
  {
    name: "Reglement Bestuursvergadering",
    file: "/documents/Reglement_Bestuursvergadering.pdf",
  },
  {
    name: "Sollicitatie & Verkiezingsreglement",
    file: "/documents/Sollicitatie_Verkiezings_reglement.pdf",
  },
];

export default function VerenigingsdocumentenPage() {
  return (
    <main className="space-y-8">
      <PageTitle
        title="Verenigings- documenten"
        subtitle="Hieronder vind je belangrijke documenten zoals statuten, huisregels en
          het AVG‑beleid."
      />

      <section className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <Link
            key={doc.file}
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 p-4 bg-gray-900 hover:bg-yellow-400 rounded-lg transition-colors"
          >
            <FileTextIcon className="w-6 h-6 text-yellow-400 group-hover:text-black flex-shrink-0" />
            <span className="font-medium text-white group-hover:text-black">
              {doc.name}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
