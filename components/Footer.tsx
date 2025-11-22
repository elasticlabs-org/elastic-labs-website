"use client";

import { Mail, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      {/* Left aligned content like Base.org */}
      <div className="w-full lg:pl-[200px] px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl space-y-12">
          {/* Simple footer content */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@elasticlabs.org"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/elasticlabs-org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/elasticlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright - Simple */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elastic Labs
          </div>
        </div>
      </div>
    </footer>
  );
}
