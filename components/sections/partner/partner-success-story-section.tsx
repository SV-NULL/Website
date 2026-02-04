import { Quote } from "lucide-react";
import Image from "next/image";

const PartnerSuccessStorySection = () => {
  return (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-700">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-yellow-400/20" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400/30">
                <Image
                  src="/images/home/9.jpg"
                  alt="Oud-lid NULL"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-4">
                &ldquo;Dankzij de lunchlezing van één van onze partners raakte
                ik enthousiast over Cloud Engineering. Twee maanden later
                startte ik daar mijn afstudeerstage!&rdquo;
              </blockquote>
              <cite className="text-gray-400 not-italic">
                <span className="text-yellow-400 font-semibold">— Oud-lid</span>
                , Studievereniging NULL
              </cite>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSuccessStorySection;
