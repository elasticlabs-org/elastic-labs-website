'use client'
import { useState } from 'react'
import SectionContainer from './SectionContainer'

const SERVICES = [
  {
    title: 'Brand Agency',
    description: 'Specialize in Web3-native brand building designed for on-chain ecosystems',
    img: '/images/BrandAgency.jpg',
    href: 'https://handbook.openguild.wtf',
    key: 'BRAND_AGENCY',
  },
  {
    title: 'Developer Activation',
    description:
      'Supercharge Web3 ecosystems by onboarding and activating developers through tailored programs, grants, and educational initiatives.',
    img: '/images/DeveloperActivation.jpg',
    href: '/activity',
    key: 'DEVELOPER_ACTIVATION',
  },
  {
    title: 'Product Development',
    description:
      'Experienced working with blockchain technology and developing software in the open-source environment.',
    img: '/images/ProductDevelopment.jpg',
    href: '/activity',
    key: 'PRODUCT_DEVELOPMENT',
  },
]

const BRAND_AGENCY_SERVICES = [
  {
    title: 'Community Growth & Engagement',
    description:
      'Build a passionate community that amplifies your brand. We create strategies to drive awareness, foster loyalty, and turn users into advocates for your tech products.',
  },
  {
    title: 'Powerful Content Creation & Distribution',
    description:
      'Capture your audience with compelling narratives. We craft stories for your brand and distribute them through our KOL networks, maximizing reach and influence in the tech industry.',
  },
  {
    title: 'Go-to-Market & Strategic Positioning',
    description:
      'We define your ideal audience and implement scalable growth strategies that enhance credibility, drive user adoption, and build long-term relationships with key stakeholders.',
  },
]

const DEVELOPER_ACTIVATION_SERVICES = [
  {
    title: 'Comprehensive Technical Documentation',
    description:
      'Unlock rapid developer adoption with detailed, user-friendly documentation for your tech tools (e.g., APIs, SDKs), designed to streamline integration and accelerate growth.',
  },
  {
    title: 'Engaging Technical Content Generation',
    description:
      'Boost your brand’s visibility with educational content tailored for developers. We promote your tools across your social platforms, positioning you as a leader in the tech space.',
  },
  {
    title: 'On-going developer support',
    description:
      'Seamlessly support your developer community with our expert guidance. We act as an extension of your team, ensuring smooth adoption and long-term engagement with your tools.',
  },
  {
    title: 'Developer Campaign Design & Execution',
    description:
      'Drive measurable adoption with custom campaigns. We design and execute initiatives to connect with developer communities, fueling engagement and growth for your tech solutions.',
  },
]

const PRODUCT_DEVELOPMENT_SERVICES = [
  {
    title: 'From Idea to Execution',
    description:
      'Transform visionary concepts into tangible products with expert guidance, ensuring seamless development and market fit in the Web3 space.',
  },
  {
    title: 'Smart Contract Development',
    description:
      'Build secure, efficient, and scalable smart contracts tailored for decentralized applications, leveraging best practices and rigorous testing.',
  },
  {
    title: 'Full-Stack Blockchain Solutions',
    description:
      'Craft end-to-end blockchain solutions, integrating on-chain and off-chain components to deliver robust, user-friendly applications.',
  },
  {
    title: 'Open-Source Product Innovation',
    description:
      'Leverage the power of open-source collaboration to drive innovation, accelerate development, and ensure transparency in your Web3 product.',
  },
]

export const ServiceFeatures = ({
  title,
  description,
  services,
  image,
}: {
  title: string
  description: string
  services: {
    title: string
    description: string
  }[]
  image: string
}) => {
  return (
    <div className="flex min-h-[500px] w-full flex-wrap overflow-hidden rounded-xl py-[50px]">
      <div
        className="h-relative mr-[30px] min-h-[400px] w-full lg:w-[35%]"
        style={{
          background: `url(/images/${image})`,
          backgroundSize: '80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex w-full flex-col text-left md:w-[60%]">
        <h1 className="mb-2 font-akira text-[2rem] font-bold tracking-tighter md:text-[3rem] lg:text-[3rem]">
          {title}
        </h1>
        <h1 className="mb-2 font-malinton text-[1rem] font-normal tracking-tighter text-gray-300 sm:text-[1rem] md:text-[1rem] lg:text-[1.5rem]">
          {description}
        </h1>
        <div className="mt-5 flex flex-col lg:justify-evenly">
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                minWidth: 350,
                borderWidth: 0.5,
                borderColor: 'white',
              }}
              className="mx-3 my-1 w-full overflow-hidden bg-black px-1 py-2"
            >
              <div className="px-6 py-4 text-left">
                <div className="mb-2 font-akira text-xl font-bold text-white">{service.title}</div>
                <p className="text-base text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LearnMoreSection() {
  const [service, setService] = useState<
    'BRAND_AGENCY' | 'DEVELOPER_ACTIVATION' | 'PRODUCT_DEVELOPMENT'
  >('BRAND_AGENCY')
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <SectionContainer>
          <h1 className="font-akira text-[2rem] font-bold font-extrabold leading-9 tracking-tight tracking-tighter text-white dark:text-gray-100 sm:text-[2rem] sm:leading-10 md:text-[3.2rem] md:leading-14 lg:text-[3.2rem]">
            Discover Our Services
          </h1>
          <div className="lg:flex lg:justify-evenly">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                onClick={() => setService(service.key as any)}
                style={{
                  minWidth: 350,
                  borderRadius: 20,
                }}
                className="mx-3 my-5 w-full cursor-pointer overflow-hidden bg-black px-3 py-3 shadow-md shadow-gray-600/50 transition-colors hover:bg-gray-900"
              >
                <div
                  style={{
                    background: `linear-gradient(
                    rgba(0, 0, 0, 0.7), 
                    rgba(0, 0, 0, 0.7)
                  ), url(${service.img})`,
                    height: 300,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 20,
                  }}
                >
                  <div className="flex h-full flex-col justify-center px-6 py-4 text-center">
                    <div className="mb-2 font-akira text-2xl font-bold text-white">
                      {service.title}
                    </div>
                    <p className="font-malinton text-base text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
        <br />
        <br />
        <section
          style={{
            backgroundImage: `url(/images/background-image.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {service === 'BRAND_AGENCY' && (
            <ServiceFeatures
              title="BRAND AGENCY"
              description="Specialize in brand building designed for on-chain ecosystems and consumer apps"
              services={BRAND_AGENCY_SERVICES}
              image="3D_Illustration1.png"
            />
          )}
          {service === 'DEVELOPER_ACTIVATION' && (
            <ServiceFeatures
              title="DEVELOPER ACTIVATION"
              description="Supercharge Web3 ecosystems by onboarding and activating developers through tailored programs, grants, and educational initiatives."
              services={DEVELOPER_ACTIVATION_SERVICES}
              image="3D_Illustration2.png"
            />
          )}
          {service === 'PRODUCT_DEVELOPMENT' && (
            <ServiceFeatures
              title="PRODUCT DEVELOPMENT"
              description="Experienced working with blockchain technology and developing software in the open-source environment."
              services={PRODUCT_DEVELOPMENT_SERVICES}
              image="3D_Illustration3.png"
            />
          )}
        </section>
        <br />
      </div>
    </div>
  )
}
