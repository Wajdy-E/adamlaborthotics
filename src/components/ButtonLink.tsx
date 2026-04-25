import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "", target, rel }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-teal-100";
  const variants = {
    primary: "bg-[var(--primary)] !text-white shadow-md shadow-teal-900/10 hover:bg-[var(--primary-dark)]",
    secondary: "bg-white !text-[var(--primary-dark)] shadow-sm ring-1 ring-stone-200 hover:bg-stone-50",
    ghost: "!text-[var(--primary)] hover:bg-teal-50",
  };

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
