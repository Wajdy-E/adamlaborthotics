import Link from "next/link";
import { business, navItems } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] !text-white">
      <div className="container-shell section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="inline-flex rounded-3xl bg-white/10 p-4">
              <Logo variant="light" />
            </div>
            <p className="mt-5 max-w-md text-teal-50/85">{business.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={business.phoneHref} variant="secondary">
                Call {business.phone}
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary" className="bg-[var(--accent)] hover:bg-[#875b32]">
                Send a Message
              </ButtonLink>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Explore</h2>
            <div className="mt-5 grid gap-3 text-teal-50/80">
              {navItems.map((item) => (
                <Link className="hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Visit</h2>
            <div className="mt-5 grid gap-3 text-teal-50/80">
              <a href={business.mapHref} target="_blank" rel="noreferrer">
                {business.address}
              </a>
              <a href={business.emailHref}>{business.email}</a>
              <a href={business.phoneHref}>{business.phone}</a>
              <div>
                {business.hours.map((item) => (
                  <p key={item.label}>
                    {item.label}: {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-teal-50/60">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
