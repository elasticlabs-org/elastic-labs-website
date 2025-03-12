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
              img: '/static/images/elastic/brand-agency-banner.jpg',
              href: 'https://handbook.openguild.wtf',
            },
            {
              title: 'Developer Activation',
              description:
                'Supercharge Web3 ecosystems by onboarding and activating developers through tailored programs, grants, and educational initiatives.',
              img: '/static/images/elastic/developer-activation-banner.jpg',
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
              className="mx-3 my-5 w-full overflow-hidden bg-black px-3 py-3 shadow-md shadow-gray-600/50 hover:shadow-blue-500"
            >
              <div
                style={{
                  background: `linear-gradient(
                    rgba(0, 0, 0, 0.7), 
                    rgba(0, 0, 0, 0.7)
                  ), url(${topic.img})`,
                  height: 200,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 20,
                }}
              >
                <div className="px-6 py-4 text-left">
                  <div className="mb-2 text-xl font-bold text-white">{topic.title}</div>
                  <p className="text-base text-gray-300">{topic.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
