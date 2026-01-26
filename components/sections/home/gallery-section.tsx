import Gallery from "@/components/features/home/gallery";

const GallerySection = () => {
  return (
    <section className="bg-neutral-900 border-y border-neutral-800 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <Gallery />
      </div>
    </section>
  );
};

export default GallerySection;
