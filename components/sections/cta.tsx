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
      className={`bg-neutral-900 mt-16 p-6 rounded text-center space-y-2 max-w-2xl mx-auto ${className}`}
    >
      <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
      <p>{text}</p>
      {button && <Button href={button.href}>{button.text}</Button>}
    </section>
  );
}
