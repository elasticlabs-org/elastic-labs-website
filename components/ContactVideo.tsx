"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ContactVideo() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 right-0 z-[-1] overflow-hidden">
        <video
          className="h-[80vh] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/lower-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex max-w-[900px] flex-col items-center justify-between gap-[30px] overflow-hidden rounded-xl bg-black bg-opacity-60 px-[80px] py-[50px] shadow-2xl md:flex-row"
      >
        <div className="mb-2 w-full text-left md:max-w-[900px]">
          <h2
            className="mb-2 text-3xl font-bold tracking-tighter text-white md:text-4xl lg:text-4xl"
            style={{ fontFamily: "Akira, sans-serif" }}
          >
            Reach out to Elastic Labs
          </h2>
          <h3
            className="mb-2 text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-xl"
            style={{ fontFamily: "Malinton, sans-serif" }}
          >
            Full-stack services for growing a vibrant ecosystem.
          </h3>
          <br />
          <p
            className="text-lg font-normal leading-relaxed text-white"
            style={{ fontFamily: "Malinton, sans-serif" }}
          >
            Developers shape the future of crypto. We're here to elevate your
            journey.
          </p>
          <div className="mt-5">
            <input
              type="email"
              id="contact_email"
              className="blocks w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="elasticlabs@gmail.com"
              required
            />
            <br />
            <a
              href="mailto:elasticlabs@gmail.com"
              className="border-white-200 text-md mx-auto my-5 flex w-fit items-center rounded-xl border bg-gradient-to-r px-5 py-2.5 text-center font-medium text-white hover:bg-blue-900 hover:bg-gradient-to-br focus:outline-none dark:shadow-lg"
              style={{ fontFamily: "Akira, sans-serif" }}
            >
              <Image
                src="/logo/White_ShortLogo.png"
                width={50}
                height={50}
                alt="Elastic Labs"
              />
              <span>Send contact information</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}



