"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    title: "Brand Agency",
    description:
      "Specialize in Web3-native brand building designed for on-chain ecosystems",
    img: "/images/BrandAgency.jpg",
    key: "BRAND_AGENCY" as const,
  },
  {
    title: "Developer Activation",
    description:
      "Supercharge Web3 ecosystems by onboarding and activating developers through tailored programs, grants, and educational initiatives.",
    img: "/images/DeveloperActivation.jpg",
    key: "DEVELOPER_ACTIVATION" as const,
  },
  {
    title: "Product Development",
    description:
      "Experienced working with blockchain technology and developing software in the open-source environment.",
    img: "/images/ProductDevelopment.jpg",
    key: "PRODUCT_DEVELOPMENT" as const,
  },
];

const BRAND_AGENCY_SERVICES = [
  {
    title: "Community Growth & Engagement",
    description:
      "Build a passionate community that amplifies your brand. We create strategies to drive awareness, foster loyalty, and turn users into advocates for your tech products.",
  },
  {
    title: "Powerful Content Creation & Distribution",
    description:
      "Capture your audience with compelling narratives. We craft stories for your brand and distribute them through our KOL networks, maximizing reach and influence in the tech industry.",
  },
  {
    title: "Go-to-Market & Strategic Positioning",
    description:
      "We define your ideal audience and implement scalable growth strategies that enhance credibility, drive user adoption, and build long-term relationships with key stakeholders.",
  },
];

const DEVELOPER_ACTIVATION_SERVICES = [
  {
    title: "Comprehensive Technical Documentation",
    description:
      "Unlock rapid developer adoption with detailed, user-friendly documentation for your tech tools (e.g., APIs, SDKs), designed to streamline integration and accelerate growth.",
  },
  {
    title: "Engaging Technical Content Generation",
    description:
      "Boost your brand's visibility with educational content tailored for developers. We promote your tools across your social platforms, positioning you as a leader in the tech space.",
  },
  {
    title: "On-going developer support",
    description:
      "Seamlessly support your developer community with our expert guidance. We act as an extension of your team, ensuring smooth adoption and long-term engagement with your tools.",
  },
  {
    title: "Developer Campaign Design & Execution",
    description:
      "Drive measurable adoption with custom campaigns. We design and execute initiatives to connect with developer communities, fueling engagement and growth for your tech solutions.",
  },
];

const PRODUCT_DEVELOPMENT_SERVICES = [
  {
    title: "From Idea to Execution",
    description:
      "Transform visionary concepts into tangible products with expert guidance, ensuring seamless development and market fit in the Web3 space.",
  },
  {
    title: "Smart Contract Development",
    description:
      "Build secure, efficient, and scalable smart contracts tailored for decentralized applications, leveraging best practices and rigorous testing.",
  },
  {
    title: "Full-Stack Blockchain Solutions",
    description:
      "Craft end-to-end blockchain solutions, integrating on-chain and off-chain components to deliver robust, user-friendly applications.",
  },
  {
    title: "Open-Source Product Innovation",
    description:
      "Leverage the power of open-source collaboration to drive innovation, accelerate development, and ensure transparency in your Web3 product.",
  },
];

type ServiceKey = "BRAND_AGENCY" | "DEVELOPER_ACTIVATION" | "PRODUCT_DEVELOPMENT";

const SERVICE_DETAILS: Record<
  ServiceKey,
  {
    title: string;
    description: string;
    services: { title: string; description: string }[];
    image: string;
  }
> = {
  BRAND_AGENCY: {
    title: "BRAND AGENCY",
    description:
      "Specialize in brand building designed for on-chain ecosystems and consumer apps",
    services: BRAND_AGENCY_SERVICES,
    image: "3D_Illustration1.png",
  },
  DEVELOPER_ACTIVATION: {
    title: "DEVELOPER ACTIVATION",
    description:
      "Supercharge Web3 ecosystems by onboarding and activating developers through tailored programs, grants, and educational initiatives.",
    services: DEVELOPER_ACTIVATION_SERVICES,
    image: "3D_Illustration2.png",
  },
  PRODUCT_DEVELOPMENT: {
    title: "PRODUCT DEVELOPMENT",
    description:
      "Experienced working with blockchain technology and developing software in the open-source environment.",
    services: PRODUCT_DEVELOPMENT_SERVICES,
    image: "3D_Illustration3.png",
  },
};

function ServiceFeatures({ serviceKey }: { serviceKey: ServiceKey }) {
  const details = SERVICE_DETAILS[serviceKey];

  return (
    <div className="flex min-h-[500px] w-full flex-wrap overflow-hidden rounded-xl py-[50px]">
      <div
        className="h-relative mr-[30px] min-h-[400px] w-full lg:w-[35%]"
        style={{
          backgroundImage: `url(/images/${details.image})`,
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex w-full flex-col text-left md:w-[60%]">
        <h2
          className="mb-2 text-[2rem] font-bold tracking-tighter md:text-[3rem] lg:text-[3rem]"
          style={{ fontFamily: "Akira, sans-serif" }}
        >
          {details.title}
        </h2>
        <p
          className="mb-2 text-[1rem] font-normal tracking-tighter text-gray-300 sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem]"
          style={{ fontFamily: "Malinton, sans-serif" }}
        >
          {details.description}
        </p>
        <div className="mt-5 flex flex-col lg:justify-evenly">
          {details.services.map((service) => (
            <div
              key={service.title}
              style={{
                minWidth: 350,
                borderWidth: 0.5,
                borderColor: "white",
              }}
              className="mx-3 my-1 w-full overflow-hidden bg-black px-1 py-2"
            >
              <div className="px-6 py-4 text-left">
                <div
                  className="mb-2 text-xl font-bold text-white"
                  style={{ fontFamily: "Akira, sans-serif" }}
                >
                  {service.title}
                </div>
                <p
                  className="text-base text-gray-300"
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesInteractive() {
  const [service, setService] = useState<ServiceKey>("BRAND_AGENCY");

  return (
    <section className="mt-10 flex flex-col items-center justify-center text-center">
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <h1
              className="mb-8 text-[2rem] font-bold tracking-tighter text-white sm:text-[2rem] md:text-[3.2rem] lg:text-[3.2rem]"
              style={{ fontFamily: "Akira, sans-serif" }}
            >
              Discover Our Services
            </h1>

            {/* Service Cards */}
            <div className="lg:flex lg:justify-evenly">
              {SERVICES.map((serviceItem) => (
                <motion.div
                  key={serviceItem.title}
                  onClick={() => setService(serviceItem.key)}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    minWidth: 350,
                    borderRadius: 20,
                  }}
                  className={`mx-3 my-5 w-full cursor-pointer overflow-hidden bg-black px-3 py-3 shadow-md shadow-gray-600/50 transition-colors hover:bg-gray-900 ${
                    service === serviceItem.key ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div
                    style={{
                      background: `linear-gradient(
                    rgba(0, 0, 0, 0.7), 
                    rgba(0, 0, 0, 0.7)
                  ), url(${serviceItem.img})`,
                      height: 300,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 20,
                    }}
                  >
                    <div className="flex h-full flex-col justify-center px-6 py-4 text-center">
                      <div
                        className="mb-2 text-2xl font-bold text-white"
                        style={{ fontFamily: "Akira, sans-serif" }}
                      >
                        {serviceItem.title}
                      </div>
                      <p
                        className="text-base text-gray-300"
                        style={{ fontFamily: "Malinton, sans-serif" }}
                      >
                        {serviceItem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <br />
          <br />

          {/* Service Details */}
          <section
            style={{
              backgroundImage: `url(/images/background-image.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceFeatures serviceKey={service} />
            </motion.div>
          </section>
          <br />
        </div>
      </div>
    </section>
  );
}



