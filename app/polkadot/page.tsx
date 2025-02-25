import React from 'react'
import { AnimatedBackground } from '@/components/AnimatedBackground'

export default function PolkadotMainPage() {
  return (
    <React.Fragment>
      <AnimatedBackground />
      <section className="body-font min-h-80vh text-white">
        <div className="container mx-auto px-0 pt-20 md:px-5 lg:px-1 lg:py-5">
          <div className="flex flex-col items-center justify-between gap-[30px] md:flex-row">
            <div className="mb-2 w-full text-left md:max-w-[900px]">
              <h1 className="mb-2 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Grow Your On-chain Ecosystem{' '}
              </h1>
              <h1 className="mb-2 text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-2xl">
                Marketing, Developer Activation, & Venture Building for the Future of
                Decentralization
              </h1>
              <br></br>
              <p className="text-lg font-normal leading-relaxed text-gray-600 text-white dark:text-gray-300">
                We help{' '}
                <span className="font-bold text-primary-500">
                  blockchain ecosystems, startups, and enterprises
                </span>{' '}
                scale their Web3 presence through strategic marketing, developer activation, and
                innovative dApps development.
              </p>
              <div className="mt-10">
                <a
                  href="https://linktr.ee/OpenGuild"
                  style={{ maxWidth: 450 }}
                  className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-10 py-2.5 text-center text-xl font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                >
                  <span>Get our services</span>
                </a>
                <div className="mt-10 italic text-gray-300">
                  Our established market: Southeast Asia and Broader Asia market.
                </div>
              </div>
            </div>
            <div>
              <img src="/static/images/elastic/3d-graphic-1.png" width={550} />
            </div>
          </div>
        </div>
      </section>
      <br />
    </React.Fragment>
  )
}
