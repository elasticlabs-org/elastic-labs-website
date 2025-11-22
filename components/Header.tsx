"use client";

import Link from "next/link";
import Image from "next/image";

const headerNavLinks = [
  { href: "/elastichub", title: "Elastic Hub" },
  { href: "/glossary", title: "Glossary" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 lg:px-16 py-10">
      <div>
        <Link href="/" aria-label="Elastic Labs">
          <Image
            src="/logo/White_FullLogo.png"
            width={150}
            height={50}
            alt="Elastic Labs"
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-white transition-transform duration-200 hover:scale-110 sm:block"
            style={{ fontFamily: "Malinton, sans-serif" }}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
}



