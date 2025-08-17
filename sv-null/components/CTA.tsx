import Link from "next/link";

interface CTAProps {
  title: string;
  text: string;
  button: {
    text: string;
    href: string;
  } | null;
}

export default function CTA({ title, text, button }: CTAProps) {
  return (
    <section className="bg-neutral-900 mt-16 p-6 rounded text-center space-y-2 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
      <p>{text}</p>
      {button && (
        <Link
          href={button.href}
          className="mt-2 inline-block px-6 py-2.5 rounded-xl font-medium
                    bg-yellow-400 text-black border-2 border-yellow-400
                    hover:bg-transparent hover:text-yellow-400
                    active:bg-transparent active:text-yellow-400
                    transition-all duration-300"
        >
          {button.text}
        </Link>
      )}
    </section>
  );
}
