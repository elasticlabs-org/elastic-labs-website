"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const apps = [
  {
    name: "Polkadot Agent Kit",
    tagline: "Build Autonomous AI Agents on Polkadot",
    description:
      "The open-source TypeScript toolkit that empowers AI agents to interact with the Polkadot & Substrate ecosystem. Execute cross-chain XCM transfers, manage wallets, and navigate DeFi & NFTs – fully optimized for LangChain and MCP.",
    image: "/polkadot-agent-kit.png",
    tags: ["Open Source", "Polkadot Native", "TypeScript", "AI Agents"],
    github: "https://github.com/elasticlabs-org/polkadot-agent-kit",
    website: "https://polkadot-agent-kit-website.vercel.app/",
    npm: "https://www.npmjs.com/package/@polkadot-agent-kit/sdk",
    stats: {
      contributors: "14",
      forks: "6",
      parachains: "0+",
    },
    features: [
      "TypeScript-First SDK",
      "Secure Transaction Signing",
      "Cross-chain XCM",
      "Multi-Parachain Support",
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
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open Source • Polkadot Native
              </div>
              <h2
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight uppercase"
                style={{ fontFamily: "Akira, sans-serif" }}
              >
                Build Autonomous{" "}
                <span className="gradient-text">AI Agents</span> on Polkadot
              </h2>
              <p
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                The open-source TypeScript toolkit empowering AI agents in the
                Polkadot & Substrate ecosystem
              </p>
            </div>

            {/* Featured Project - Polished Card */}
            <div className="relative max-w-5xl mx-auto">
              <div className="rounded-3xl bg-muted/50 border border-border overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Visual Side */}
                  <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-linear-to-br from-pink-500 via-pink-600 to-pink-700">
                    <Image
                      src="/images/Polkadot_AI_Cover.png"
                      alt="Polkadot AI Agent Kit"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Content Side */}
                  <div className="p-12 space-y-6 flex flex-col justify-center bg-background">
                    <div className="space-y-4">
                      <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: "Akira, sans-serif" }}
                      >
                        Polkadot Agent Kit
                      </h3>
                      <p
                        className="text-lg text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "Malinton, sans-serif" }}
                      >
                        Execute cross-chain XCM transfers, manage wallets, and
                        navigate DeFi & NFTs – fully optimized for LangChain and
                        MCP.
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {apps[0].features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span
                            className="text-sm text-muted-foreground"
                            style={{ fontFamily: "Malinton, sans-serif" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 pt-2">
                      <div className="text-center">
                        <div
                          className="text-2xl font-bold gradient-text"
                          style={{ fontFamily: "Akira, sans-serif" }}
                        >
                          14
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "Malinton, sans-serif" }}
                        >
                          Contributors
                        </div>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="text-center">
                        <div
                          className="text-2xl font-bold gradient-text"
                          style={{ fontFamily: "Akira, sans-serif" }}
                        >
                          6
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "Malinton, sans-serif" }}
                        >
                          Forks
                        </div>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="text-center">
                        <div
                          className="text-2xl font-bold gradient-text"
                          style={{ fontFamily: "Akira, sans-serif" }}
                        >
                          0+
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "Malinton, sans-serif" }}
                        >
                          Parachains
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href="https://polkadot-agent-kit-website.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all"
                        style={{ fontFamily: "Malinton, sans-serif" }}
                      >
                        <ExternalLink className="h-5 w-5" />
                        Visit Website
                      </a>
                      <a
                        href="https://github.com/elasticlabs-org/polkadot-agent-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border rounded-full font-bold hover:border-primary transition-colors"
                        style={{ fontFamily: "Malinton, sans-serif" }}
                      >
                        <Github className="h-5 w-5" />
                        GitHub
                      </a>
                    </div>

                    {/* Footer */}
                    <p
                      className="text-sm text-muted-foreground pt-2"
                      style={{ fontFamily: "Malinton, sans-serif" }}
                    >
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
