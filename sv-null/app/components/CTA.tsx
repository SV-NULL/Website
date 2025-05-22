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
    <section className="bg-gray-900 p-6 rounded text-center space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{text}</p>
      {button && (
        <a href={button.href} className="inline-block px-4 py-2 bg-yellow-400 text-black rounded">
          {button.text}
        </a>
      )}
    </section>
  );
}