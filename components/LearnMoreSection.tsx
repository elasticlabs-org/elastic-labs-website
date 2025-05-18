'use client'
import { useState } from 'react'

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
      'We cultivate thriving ecosystems by executing targeted community strategies that boost adoption, foster engagement, and drive sustainable organic growth across key Web3 channels.',
  },
  {
    title: 'Creative Branding & Market Differentiation',
    description:
      'From concept to execution, we craft bold, innovative campaigns that enhance brand visibility, establish authority, and create a unique identity in the competitive Web3 landscape.',
  },
  {
    title: 'Go-to-Market & Strategic Positioning',
    description:
      'We define your ideal audience and implement scalable growth strategies that enhance credibility, drive user adoption, and build long-term relationships with key stakeholders.',
  },
]

const DEVELOPER_ACTIVATION_SERVICES = [
  {
    title: 'Establish the Root',
    description:
      'Identify your unique value proposition, attract high-quality developers, and position your technology as essential in Web3—resulting in a clear roadmap to credibility and the right builders.',
  },
  {
    title: 'Educating & Onboarding Developers',
    description:
      'Deliver tailored educational experiences that go beyond expectations, providing the knowledge and tools developers need to seamlessly integrate into your ecosystem.',
  },
  {
    title: 'Community Activation & Engagement',
    description:
      'Expand reach by connecting with top developer communities, launching targeted adoption campaigns, and streamlining onboarding for seamless developer engagement. ',
  },
  {
    title: 'Enabling Creativity & Innovation',
    description:
      'Empower developers through collaboration, grants, and hackathons while providing direct support to overcome technical challenges',
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

export default function LearnMoreSection() {
  const [service, setService] = useState<
    'BRAND_AGENCY' | 'DEVELOPER_ACTIVATION' | 'PRODUCT_DEVELOPMENT'
  >('BRAND_AGENCY')
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="font-akira text-4xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
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
            <div className="flex min-h-[500px] w-full flex-wrap overflow-hidden rounded-xl bg-black py-[50px]">
              <div
                className="h-relative mr-[30px] min-h-[300px] w-[35%]"
                style={{
                  background: `url(/images/3D_Illustration1.png)`,
                  backgroundSize: '80%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="flex w-[60%] flex-col text-left">
                <h1 className="mb-2 font-akira text-3xl font-bold tracking-tighter md:text-4xl lg:text-4xl">
                  BRAND AGENCY
                </h1>
                <h1 className="mb-2 font-malinton text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-xl">
                  Specialize in Web3-native brand building designed for on-chain ecosystems
                </h1>
                <div className="mt-5 flex flex-col lg:justify-evenly">
                  {BRAND_AGENCY_SERVICES.map((service) => (
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
                        <div className="mb-2 font-akira text-xl font-bold text-white">
                          {service.title}
                        </div>
                        <p className="text-base text-gray-300">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {service === 'DEVELOPER_ACTIVATION' && (
            <div className="flex min-h-[500px] w-full flex-wrap overflow-hidden rounded-xl bg-black py-[50px]">
              <div
                className="h-relative mr-[30px] min-h-[300px] w-[35%]"
                style={{
                  background: `url(/images/3D_Illustration2.png)`,
                  backgroundSize: '80%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="flex w-[60%] flex-col text-left">
                <h1 className="mb-2 font-akira text-3xl font-bold tracking-tighter md:text-4xl lg:text-4xl">
                  DEVELOPER ACTIVATION
                </h1>
                <h1 className="mb-2 font-malinton text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-xl">
                  Specialize in Web3-native brand building designed for on-chain ecosystems
                </h1>
                <div className="mt-5 flex flex-col lg:justify-evenly">
                  {DEVELOPER_ACTIVATION_SERVICES.map((service) => (
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
                        <div className="mb-2 font-akira text-xl font-bold text-white">
                          {service.title}
                        </div>
                        <p className="text-base text-gray-300">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {service === 'PRODUCT_DEVELOPMENT' && (
            <div className="flex min-h-[500px] w-full flex-wrap overflow-hidden rounded-xl bg-black py-[50px]">
              <div
                className="h-relative mr-[30px] min-h-[300px] w-[35%]"
                style={{
                  background: `url(/images/3D_Illustration3.png)`,
                  backgroundSize: '80%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="flex w-[60%] flex-col text-left">
                <h1 className="mb-2 font-akira text-3xl font-bold tracking-tighter md:text-4xl lg:text-4xl">
                  PRODUCT DEVELOPMENT
                </h1>
                <h1 className="mb-2 font-malinton text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-xl">
                  Specialize in Web3-native brand building designed for on-chain ecosystems
                </h1>
                <div className="mt-5 flex flex-col lg:justify-evenly">
                  {PRODUCT_DEVELOPMENT_SERVICES.map((service) => (
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
                        <div className="mb-2 font-akira text-xl font-bold text-white">
                          {service.title}
                        </div>
                        <p className="font-malinton text-base text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
        <br />
      </div>
    </div>
  )
}
