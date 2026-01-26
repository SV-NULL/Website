import Members from "@/components/features/members/members";
import { getBoardById } from "@/lib/content/repositories/boards";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BoardDetailPage({ params }: Props) {
  const { slug } = await params;
  const board = getBoardById(slug);
  if (!board) return notFound();

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-8 pt-8">
        <Link
          href="/bestuur"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 
                     transition-colors duration-200 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
          <span className="font-medium">Terug naar alle besturen</span>
        </Link>
      </div>

      {/* Hero Section met Bestuursfoto */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden mt-6">
        <Image
          src={board.image.src}
          alt={board.image.alt || board.title}
          fill
          priority={board.image.isPriority}
          className="object-cover bestuur-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16">
          <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {board.title}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 font-medium">
              Studiejaar {board.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-12 md:py-16">
        {/* Introductie Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="prose prose-invert prose-lg max-w-none
                       prose-p:text-gray-300 prose-p:leading-relaxed
                       prose-strong:text-white prose-strong:font-semibold
                       prose-br:content-[''] prose-br:block prose-br:my-2"
            dangerouslySetInnerHTML={{ __html: board.content }}
          />
        </div>

        {/* Bestuursleden Section */}
        {board.members && board.members.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                De bestuursleden
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto" />
            </div>

            <Members
              members={board.members}
              imageUrlPrefix={`/images/bestuur/${board.id}/`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
