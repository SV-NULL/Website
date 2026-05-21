"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = {
  href?: string;
  target?: HTMLAnchorElement["target"];
  rel?: HTMLAnchorElement["rel"];
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({
  href,
  target,
  rel,
  className,
  children,
  ...buttonProps
}: Props) => {
  const classes =
    "w-fit inline-block px-6 py-2.5 rounded-xl bg-yellow-400 text-black border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 active:bg-transparent active:text-yellow-400 transition-all duration-300 text-sm text-center align-center";

  if (!href) {
    return (
      <button className={`${classes} ${className}`} {...buttonProps}>
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      tabIndex={buttonProps.tabIndex}
      className={`${classes} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
