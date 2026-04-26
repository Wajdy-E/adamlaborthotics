import Link from "next/link";
import { business, navItems } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[var(--cream)]/92 backdrop-blur-xl">
      <div className="bg-[var(--primary-dark)] !text-white">
        <div className="container-shell flex flex-col gap-2 py-2 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <a href={business.phoneHref}>{business.phone}</a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/90">
            <a href={business.emailHref}>{business.email}</a>
            <a href={business.mapHref} target="_blank" rel="noreferrer">
              {business.address} · beside Dundurn Plaza
            </a>
          </div>
        </div>
      </div>
      <div className="container-shell flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-stone-700 lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-[var(--primary)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-sm">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-stone-200 bg-white p-3 shadow-2xl">
            {navItems.map((item) => (
              <Link className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-stone-50" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="mt-2 block rounded-2xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-bold text-white" href="/contact">
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
