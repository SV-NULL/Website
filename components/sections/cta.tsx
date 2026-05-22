import Button from "../ui/button";

interface CTAProps {
  title: string;
  text: string;
  button?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function CTA({ title, text, button, className }: CTAProps) {
  return (
    <section
      className={`relative mt-16 p-8 rounded-2xl text-center space-y-4 max-w-2xl mx-auto border border-neutral-800 bg-neutral-900/50 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 to-transparent pointer-events-none mb-0" />
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
        <p className="text-gray-300">{text}</p>
        {button && <Button href={button.href}>{button.text}</Button>}
      </div>
    </section>
  );
}
