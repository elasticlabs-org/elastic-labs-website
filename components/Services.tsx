"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "BRAND AGENCY",
    description:
      "Base is built to empower builders, creators, and people everywhere to build apps, grow businesses, create what they love, and earn onchain.",
    color: "from-green-400 to-green-600",
  },
  {
    title: "DEVELOPER ACTIVATION",
    description:
      "Build apps on a secure, low-cost, developer-friendly Ethereum L2. Activate developers through grants and educational programs.",
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "AI AGENTS",
    description:
      "The global, open blockchain network bringing economic opportunity to everyone, everywhere. AI-powered autonomous agents for Web3.",
    color: "from-amber-400 to-amber-600",
  },
  {
    title: "ELASTIC HUB",
    description:
      "Explore the forefront of on-chain finance. Research, insights, and analysis for the future of crypto.",
    color: "from-blue-400 to-blue-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-muted/30">
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
              <h2
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight uppercase"
                style={{ fontFamily: "Akira, sans-serif" }}
              >
                Discover Our <span className="gradient-text">Services</span>
              </h2>
              <p
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                Full-stack solutions for growing vibrant Web3 ecosystems
              </p>
            </div>

            {/* Services Grid - Polished cards with visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card with gradient border effect */}
                  <div className="relative h-full p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all shadow-xl hover:shadow-2xl overflow-hidden">
                    {/* Visual Element - Animated bars */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 flex items-center justify-end pr-8">
                      <div className="flex items-center gap-0.5 h-[60%]">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-1 bg-gradient-to-t ${service.color}`}
                            style={{
                              height: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              height: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                              ],
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random(),
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <h3
                        className="text-2xl font-bold group-hover:text-primary transition-colors uppercase"
                        style={{ fontFamily: "Akira, sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "Malinton, sans-serif" }}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
