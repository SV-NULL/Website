interface CTAProps {
  title: string;
  text: string;
  button: {
    text: string;
    href: string;
  };
}

export default function CTA({ title, text, button }: CTAProps) {
  return (
    <section className="bg-gray-900 py-12 px-4 text-center rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{text}</p>
      <a href={button.href} className="bg-black text-white px-6 py-2 rounded-md inline-block hover:bg-gray-800 transition">
        {button.text}
      </a>
    </section>
  );
}
