import Link from 'next/link'

export default function LearnMoreSection() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Discover our services
        </h1>
        <div className="lg:flex lg:justify-evenly">
          {[
            {
              title: 'Brand Agency',
              description:
                'Specialize in Web3-native brand building designed for on-chain ecosystems',
              img: '/static/images/elastic/brand-agency.jpeg',
              href: 'https://handbook.openguild.wtf',
            },
            {
              title: 'Developer Activation',
              description:
                'Supercharge Web3 ecosystems by onboarding and activating developers through tailored programs, grants, and educational initiatives.',
              img: '/static/images/elastic/developer.jpg',
              href: '/activity',
            },
          ].map((topic) => (
            <Link
              href={topic.href}
              key={topic.title}
              style={{
                minWidth: 350,
                borderRadius: 20,
              }}
              className="mx-3 my-5 w-full overflow-hidden border border-gray-800 bg-black shadow-xl"
            >
              <div
                style={{
                  background: `url(${topic.img})`,
                  marginBottom: 5,
                  height: 300,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className=" px-6 py-4 text-left">
                <div className="mb-2 text-xl font-bold text-white">{topic.title}</div>
                <p className="text-base text-gray-500">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
