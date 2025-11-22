"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Image from "next/image";

const apps = [
  {
    name: "Polkadot Agent Kit",
    description: "Open-source library for building autonomous AI agents capable of executing complex operations within the Polkadot ecosystem",
    image: "/polkadot-agent-kit.png",
    tags: ["AI Agent", "Polkadot", "TypeScript", "LangChain"],
    github: "https://github.com/elasticlabs-org/polkadot-agent-kit",
    demo: "https://www.npmjs.com/package/@polkadot-agent-kit/sdk",
    stats: {
      stars: "14",
      forks: "6",
    },
    features: [
      "Multi-chain support across Polkadot ecosystem",
      "LangChain integration for AI agents",
      "Native token transfers and XCM handling",
      "Comprehensive TypeScript SDK",
    ],
  },
];

export function AppsShowcase() {
  return (
    <section id="apps" className="py-32 bg-background">
      {/* Account for sidebar */}
      <div className="w-full lg:pl-[200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-20"
          >
                {/* Header - Centered and Bold */}
                <div className="text-center space-y-6">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight uppercase" style={{ fontFamily: 'Akira, sans-serif' }}>
                    <span className="gradient-text">AI Agents</span> for Polkadot
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: 'Malinton, sans-serif' }}>
                    Open-source tools for building autonomous blockchain agents
                  </p>
                </div>

          {/* Featured Project - Polished Card */}
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-3xl bg-muted/50 border border-border overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Visual Side */}
                <div className="relative aspect-square lg:aspect-auto bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-9xl mb-8">🤖</div>
                    <div className="text-3xl font-bold gradient-text">Polkadot Agent Kit</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-12 space-y-8 flex flex-col justify-center bg-background">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: 'Akira, sans-serif' }}>
                          Polkadot Agent Kit
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Malinton, sans-serif' }}>
                          Build autonomous AI agents for the Polkadot ecosystem. Multi-chain support, LangChain integration, and comprehensive TypeScript SDK.
                        </p>
                      </div>

                  {/* Stats */}
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="h-6 w-6" />
                      <span className="text-2xl font-bold">14</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GitFork className="h-6 w-6" />
                      <span className="text-2xl font-bold">6</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="https://github.com/elasticlabs-org/polkadot-agent-kit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-transform"
                    >
                      <Github className="h-5 w-5" />
                      View on GitHub
                    </a>
                    <a
                      href="https://www.npmjs.com/package/@polkadot-agent-kit/sdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border rounded-full font-bold hover:border-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      NPM Package
                    </a>
                  </div>

                  {/* Footer */}
                  <p className="text-sm text-muted-foreground pt-4">
                    ✨ Supported by Web3 Foundation Grants Program
                  </p>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

