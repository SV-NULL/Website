type Props = {
  variant?: "accent" | "neutral";
  className?: string;
};

export default function Divider({
  variant = "neutral",
  className = "",
}: Props) {
  const via = variant === "accent" ? "via-yellow-400/30" : "via-neutral-700/60";
  return (
    <div
      className={`h-px bg-linear-to-r from-transparent ${via} to-transparent ${className}`}
    />
  );
}
