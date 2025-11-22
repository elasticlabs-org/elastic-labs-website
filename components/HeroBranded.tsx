"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroBranded() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Account for sidebar on desktop */}
      <div className="relative z-10 w-full lg:pl-[200px] px-4 sm:px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Region Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🌏 Southeast Asia & Broader Asia Market
              </span>
            </motion.div>

            {/* Main Heading - Akira Font */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight uppercase"
              style={{ fontFamily: 'Akira, sans-serif' }}
            >
              GROW YOUR <br />
              <span className="gradient-text">ON-CHAIN ECOSYSTEM</span>
            </motion.h1>

            {/* Subtitle - Malinton Font */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80 mb-8"
              style={{ fontFamily: 'Malinton, sans-serif' }}
            >
              AI x Crypto Innovation
            </motion.p>

            {/* Description - Malinton Font */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
              style={{ fontFamily: 'Malinton, sans-serif' }}
            >
              Marketing, Developer Activation, & Venture Building for the Future
              of Decentralization
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/#contact"
                className="group px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Malinton, sans-serif' }}
              >
                Get Our Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#apps"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-all"
                style={{ fontFamily: 'Malinton, sans-serif' }}
              >
                Explore Our Apps
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="p-6 rounded-2xl bg-muted/50 backdrop-blur-sm">
                <div className="text-3xl font-bold gradient-text mb-2" style={{ fontFamily: 'Akira, sans-serif' }}>
                  AI-POWERED
                </div>
                <div className="text-muted-foreground" style={{ fontFamily: 'Malinton, sans-serif' }}>Agent Development</div>
              </div>
              <div className="p-6 rounded-2xl bg-muted/50 backdrop-blur-sm">
                <div className="text-3xl font-bold gradient-text mb-2" style={{ fontFamily: 'Akira, sans-serif' }}>
                  WEB3-NATIVE
                </div>
                <div className="text-muted-foreground" style={{ fontFamily: 'Malinton, sans-serif' }}>Brand Building</div>
              </div>
              <div className="p-6 rounded-2xl bg-muted/50 backdrop-blur-sm">
                <div className="text-3xl font-bold gradient-text mb-2" style={{ fontFamily: 'Akira, sans-serif' }}>
                  FULL-STACK
                </div>
                <div className="text-muted-foreground" style={{ fontFamily: 'Malinton, sans-serif' }}>Ecosystem Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-foreground/40 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}



