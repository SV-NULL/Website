type Props = {
  children: string;
};

export default function SectionBadge({ children }: Props) {
  return (
    <div className="flex justify-center mb-5">
      <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
        {children}
      </span>
    </div>
  );
}
