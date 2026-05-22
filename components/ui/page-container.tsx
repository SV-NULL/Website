import clsx from "clsx";
import { type ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-4xl px-4 lg:px-8", className)}>
      {children}
    </div>
  );
}
