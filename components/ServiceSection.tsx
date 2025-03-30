import React from 'react'

const ServiceSection = () => {
  return (
    <section
      className="flex min-h-[60vh] flex-col items-center justify-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/static/images/elastic/gradient-background.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex max-w-[900px] flex-col items-center justify-between gap-[30px] overflow-hidden rounded-xl bg-black bg-opacity-60 px-[80px] py-[50px] shadow-2xl md:flex-row">
        <div className="mb-2 w-full text-left md:max-w-[900px]">
          <h1 className="mb-2 text-3xl font-bold tracking-tighter md:text-4xl lg:text-4xl">
            Reach out to Elasitc Labs
          </h1>
          <h1 className="mb-2 text-xl font-normal tracking-tighter text-gray-300 md:text-2xl lg:text-xl">
            Full-stack services for growing a vibrant ecosystem.
          </h1>
          <br></br>
          <p className="text-lg font-normal leading-relaxed text-gray-600 text-white dark:text-gray-300">
            Developers shape the future of crypto. We're here to elevate your journey.
          </p>
          <div className="mt-10">
            <input
              type="text"
              id="last_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="elasticlabs@gmail.com"
              required
            />
            <br />
            <a
              href="https://linktr.ee/OpenGuild"
              className="border-white-200 text-md mx-auto my-5 rounded-md border bg-gradient-to-r px-5 py-2.5 text-center font-medium text-white hover:bg-blue-900 hover:bg-gradient-to-br focus:outline-none dark:shadow-lg"
            >
              <span>Send contact information</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
