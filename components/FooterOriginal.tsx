"use client";

import Link from "next/link";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export function FooterOriginal() {
  return (
    <footer className="mt-16">
      <div className="flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            href="mailto:elasticlabs@gmail.com"
            className="text-gray-500 transition-colors hover:text-white dark:text-gray-400"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/elasticlabs-org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white dark:text-gray-400"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/elasticlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white dark:text-gray-400"
            aria-label="X (Twitter)"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <div
          className="mb-2 flex space-x-2 text-lg text-gray-500 dark:text-gray-400"
          style={{ fontFamily: "Malinton, sans-serif" }}
        >
          <div>Elastic Labs</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}



