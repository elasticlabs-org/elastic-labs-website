"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[200px] p-6 bg-background border-r border-border z-50 hidden lg:flex flex-col">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <Image
          src="/logo/White_ShortLogo.png"
          alt="Elastic Labs Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain dark:block hidden"
        />
        <Image
          src="/logo/Black_ShortLogo.png"
          alt="Elastic Labs Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain block dark:hidden"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 space-y-1">
        <Link
          href="/#services"
          className="block py-3 text-foreground hover:text-foreground font-medium transition-colors group"
        >
          <div className="flex items-center justify-between">
            Services
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
        <Link
          href="/#apps"
          className="block py-3 text-foreground hover:text-foreground font-medium transition-colors group"
        >
          <div className="flex items-center justify-between">
            Apps
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
        <Link
          href="/elastichub"
          className="block py-3 text-foreground hover:text-foreground font-medium transition-colors group"
        >
          <div className="flex items-center justify-between">
            Elastic Hub
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
        <Link
          href="/glossary"
          className="block py-3 text-foreground hover:text-foreground font-medium transition-colors group"
        >
          <div className="flex items-center justify-between">
            Glossary
            <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-border space-y-2">
        <Link
          href="/#contact"
          className="block py-3 text-foreground hover:text-foreground font-medium transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
