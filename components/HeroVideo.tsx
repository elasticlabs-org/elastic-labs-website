"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVideo() {
  return (
    <section className="relative min-h-[80vh] text-white">
      {/* Video Background */}
      <div className="absolute inset-0 right-0 z-[-1] overflow-hidden">
        <video
          className="h-[80vh] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/upper-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 md:px-8 lg:px-12 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex min-h-[400px] flex-col items-center justify-between gap-8 md:flex-row"
        >
          <div className="mb-2 w-full text-left md:max-w-[1000px]">
            {/* Main Heading */}
            <h1
              className="mb-2 text-[2rem] font-bold tracking-tighter sm:text-[3rem] md:text-[4rem] lg:text-[4rem]"
              style={{ fontFamily: "Akira, sans-serif", lineHeight: "1" }}
            >
              GROW YOUR <br />
              ON-CHAIN ECOSYSTEM
            </h1>

            {/* Subtitle */}
            <h2
              className="mb-2 text-[1rem] font-normal tracking-tighter text-gray-300 sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem]"
              style={{ fontFamily: "Malinton, sans-serif" }}
            >
              Marketing, Developer Activation, & Venture Building for the Future
              of Decentralization
            </h2>

            <br />

            {/* Description with Logo */}
            <div className="flex items-center justify-center gap-2">
              <Image
                className="hidden md:block"
                src="/logo/White_ShortLogo.png"
                width={50}
                height={50}
                alt="Elastic Labs"
              />
              <p
                className="text-md text-white leading-relaxed text-white sm:text-[1rem] md:text-[1.5rem] lg:text-[1.2rem]"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                Elastic Labs is{" "}
                <span className="font-bold text-blue-400">
                  a premier marketing and developer relations agency, driving
                  innovation in the tech industry
                </span>
                . We empower companies to scale their digital presence through
                strategic marketing, seamless developer activation, and
                cutting-edge app development.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="mailto:elasticlabs@gmail.com"
                style={{ maxWidth: 450, fontFamily: "Akira, sans-serif" }}
                className="mx-auto my-5 inline-block rounded-xl border px-7 py-5 text-center text-lg font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
              >
                GET OUR SERVICES
              </a>
              <div
                className="text-md mt-10 text-gray-300 sm:text-[1rem] md:text-[1.5rem] lg:text-[1.2rem]"
                style={{ fontFamily: "Malinton, sans-serif" }}
              >
                Our established market: Southeast Asia and Broader Asia market.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



