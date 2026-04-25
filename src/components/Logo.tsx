import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
};

export function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link className="flex items-center transition duration-300 hover:-translate-y-0.5 hover:opacity-85" href="/" aria-label="Adam Lab Orthotic home">
      <Image
        alt="Adam Lab Orthotic"
        className="h-12 w-auto object-contain sm:h-14"
        height={124}
        priority
        src={variant === "light" ? "/logo-white.png" : "/logo.png"}
        width={286}
      />
    </Link>
  );
}
