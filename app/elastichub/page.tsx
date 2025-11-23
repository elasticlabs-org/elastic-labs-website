"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, BookOpen, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function ElasticHubPage() {
  const features = [
    {
      icon: "📊",
      title: "On-Chain Finance",
      description: "Deep dives into DeFi protocols, yield strategies, and financial primitives shaping the future of decentralized finance",
    },
    {
      icon: "🏗️",
      title: "Web3 Infrastructure",
      description: "Technical analysis of blockchain networks, scaling solutions, and the developer tools building tomorrow's internet",
    },
    {
      icon: "🤖",
      title: "AI x Crypto",
      description: "Exploring the convergence of artificial intelligence and blockchain technology in autonomous systems",
    },
  ];

  const stats = [
    { label: "Launched", value: "2024" },
    { label: "Focus", value: "Web3 & AI" },
    { label: "Platform", value: "Substack" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden lg:pl-[200px]">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8"
              style={{ fontFamily: "Malinton, sans-serif" }}
            >
              <Sparkles className="h-4 w-4" />
              Research & Insights Publication
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 uppercase leading-tight"
              style={{ fontFamily: "Akira, sans-serif" }}
            >
              <span className="gradient-text">Elastic</span>
              <br />
              Hub
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl sm:text-3xl text-foreground/80 mb-6 leading-relaxed"
              style={{ fontFamily: "Malinton, sans-serif" }}
            >
              Explore the forefront of on-chain finance
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Malinton, sans-serif" }}
            >
              Discover the people, tools, and ideas shaping the future of Web3 finance, infrastructure, and consumer apps
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-8 mb-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold gradient-text" style={{ fontFamily: "Akira, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground" style={{ fontFamily: "Malinton, sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://elastichub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                Read Latest Articles
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://elastichub.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border rounded-full font-bold text-lg hover:border-primary transition-all"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                <Users className="h-5 w-5" />
                Subscribe Free
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-32 bg-muted/30 lg:pl-[200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-5xl sm:text-6xl font-bold mb-6 uppercase"
              style={{ fontFamily: "Akira, sans-serif" }}
            >
              What We <span className="gradient-text">Cover</span>
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "Malinton, sans-serif" }}
            >
              In-depth research and analysis on the latest trends shaping Web3
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 
                  className="text-2xl font-bold mb-4 uppercase group-hover:text-primary transition-colors"
                  style={{ fontFamily: "Akira, sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background lg:pl-[200px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-12 text-center"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 
                className="text-4xl sm:text-5xl font-bold mb-6 uppercase"
                style={{ fontFamily: "Akira, sans-serif" }}
              >
                Ready to <span className="gradient-text">Dive In?</span>
              </h2>
              <p 
                className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                Join our community of builders, researchers, and innovators. Get weekly insights delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://elastichub.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg"
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  <ExternalLink className="h-5 w-5" />
                  Visit Elastic Hub
                </a>
                <Link
                  href="/"
                  className="px-8 py-4 border-2 border-border rounded-full font-bold text-lg hover:border-primary transition-all"
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
