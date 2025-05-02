import React from 'react'

const HeaderSection = () => {
  return (
    <section className="body-font min-h-80vh text-white">
      <div className="container mx-auto px-0 pt-20 md:px-5 lg:px-1 lg:py-5">
        <div className="flex min-h-[400px] flex-col items-center justify-between gap-[30px] md:flex-row">
          <div className="mb-2 w-full text-left md:max-w-[900px]">
            <h1 className="mb-2 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Grow Your On-chain Ecosystem{' '}
            </h1>
            <h1 className="mb-2 text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-2xl">
              Marketing, Developer Activation, & Venture Building for the Future of Decentralization
            </h1>
            <br></br>
            <p className="text-lg font-normal leading-relaxed text-gray-600 text-white dark:text-gray-300">
              We help{' '}
              <span className="font-bold text-blue-400">
                blockchain ecosystems, startups, and enterprises
              </span>{' '}
              scale their Web3 presence through strategic marketing, developer activation, and
              innovative dApps development.
            </p>
            <div className="mt-10">
              <a
                href="mailto:elasticlabs@gmail.com"
                style={{ maxWidth: 450 }}
                className="border-white-200 mx-auto my-5 rounded-3xl border bg-gradient-to-r px-10 py-2.5 text-center text-xl font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-blue-900 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
              >
                <span>Get our services</span>
              </a>
              <div className="mt-10 italic text-gray-300">
                Our established market: Southeast Asia and Broader Asia market.
              </div>
            </div>
          </div>
          <div id="mouseover-container">
            <img id="mouseover-object" src="/static/images/elastic/3d-graphic-2.png" width={550} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
