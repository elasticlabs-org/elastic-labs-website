import React from 'react'

const HeaderSection = () => {
  return (
    <section className="body-font min-h-80vh relative text-white">
      <div className="container relative z-10 mx-auto px-0 pt-20 md:px-5 lg:px-1 lg:py-5">
        <div className="flex min-h-[400px] flex-col items-center justify-between gap-[30px] md:flex-row">
          <div className="mb-2 w-full text-left md:max-w-[1000px]">
            <h1
              className="mb-2 font-akira text-[2rem] font-bold tracking-tighter sm:text-[3rem] md:text-[4rem] lg:text-[4rem]"
              style={{ lineHeight: '1' }}
            >
              GROW YOUR <br />
              ON-CHAIN ECOSYSTEM
            </h1>
            <h1 className="mb-2 font-malinton text-[1rem] font-normal tracking-tighter text-gray-300 sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem]">
              Marketing, Developer Activation, & Venture Building for the Future of Decentralization
            </h1>
            <br></br>
            <div className="flex items-center justify-center gap-2">
              <img
                className="hidden md:block"
                src="/logo/White_ShortLogo.png"
                width={50}
                height={50}
              />
              <p className="text-md font-malinton font-normal leading-relaxed text-gray-600 text-white dark:text-gray-300 sm:text-[1rem] md:text-[1.5rem] lg:text-[1.2rem]">
                Elastic Labs is{' '}
                <span className="font-bold text-blue-400">
                  a premier marketing and developer relations agency, driving innovation in the tech
                  industry
                </span>
                . We empower companies to scale their digital presence through strategic marketing,
                seamless developer activation, and cutting-edge app development.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="mailto:elasticlabs@gmail.com"
                style={{ maxWidth: 450 }}
                className="mx-auto my-5 rounded-xl border  px-7 py-5 text-center font-akira text-lg font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
              >
                <span>GET OUR SERVICES</span>
              </a>
              <div className="text-md mt-10 font-malinton text-gray-300 sm:text-[1rem] md:text-[1.5rem] lg:text-[1.2rem]">
                Our established market: Southeast Asia and Broader Asia market.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
