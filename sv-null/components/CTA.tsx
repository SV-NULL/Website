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
    <section className="bg-gray-900 mt-16 p-6 rounded text-center space-y-2 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{text}</p>
      {button && (
        <Link
          href={button.href}
          className="inline-block px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors"
        >
          {button.text}
        </Link>
      )}
    </section>
  );
}
