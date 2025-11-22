"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function ElasticHubPage() {
  const topics = [
    {
      icon: BookOpen,
      title: "On-Chain Finance",
      description:
        "Deep dives into DeFi protocols, yield strategies, and financial primitives",
    },
    {
      icon: TrendingUp,
      title: "Web3 Infrastructure",
      description:
        "Technical analysis of blockchain networks, scaling solutions, and developer tools",
    },
    {
      icon: Lightbulb,
      title: "AI x Crypto",
      description:
        "Exploring the intersection of artificial intelligence and blockchain technology",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 gradient-primary opacity-10"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo/Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl mb-4">
                📰
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Elastic Hub</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            >
              Explore the forefront of on-chain finance. Discover the people,
              tools, and ideas shaping the future of Web3 finance,
              infrastructure, and consumer apps.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://elastichub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Subscribe on Substack
                <ExternalLink className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What We Cover
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth research and analysis on the latest trends in Web3
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
              >
                <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 text-primary">
                  <topic.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of builders, researchers, and innovators
              shaping the future of Web3
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://elastichub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Read on Substack
                <ExternalLink className="h-5 w-5" />
              </a>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
