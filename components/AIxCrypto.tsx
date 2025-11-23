"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AIxCrypto() {
  return (
    <>
      {/* AI x Crypto Section */}
      <section className="py-32 bg-muted/30">
        <div className="w-full lg:pl-[200px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-20"
            >
              {/* Header */}
              <div className="text-center space-y-6">
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight uppercase"
                  style={{ fontFamily: "Akira, sans-serif" }}
                >
                  The Future is{" "}
                  <span className="gradient-text">AI x Crypto</span>
                </h2>
                <p
                  className="text-xl text-muted-foreground max-w-3xl mx-auto"
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  Building the infrastructure for autonomous, decentralized
                  systems
                </p>
              </div>

              {/* Key Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
                >
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    Open Source
                  </h3>
                  <p className="text-muted-foreground">
                    Transparent collaboration
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
                >
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    Developer First
                  </h3>
                  <p className="text-muted-foreground">
                    Built by devs, for devs
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
                >
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    Production Ready
                  </h3>
                  <p className="text-muted-foreground">
                    Battle-tested solutions
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/lower-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="relative z-20 w-full lg:pl-[200px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              {/* Header */}
              <div className="space-y-6">
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight uppercase text-white"
                  style={{ fontFamily: "Akira, sans-serif" }}
                >
                  Ready to <span className="gradient-text">Grow Together?</span>
                </h2>
                <p
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  Developers shape the future of crypto. We&apos;re here to
                  elevate your journey.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="mailto:contact@elasticlabs.org"
                  className="px-10 py-5 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
                <Link
                  href="/elastichub"
                  className="px-10 py-5 border-2 border-primary text-primary rounded-full font-bold text-xl hover:bg-primary/10 transition-all"
                >
                  Read Elastic Hub
                </Link>
              </div>

              {/* Region */}
              <p className="text-gray-300 pt-8">
                🌏 Established market:{" "}
                <span className="text-white font-semibold">
                  Southeast Asia & Broader Asia
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
