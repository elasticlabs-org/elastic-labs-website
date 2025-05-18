/* eslint-disable @next/next/no-img-element */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[50px] py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img
                src="/static/images/elastic/logo/elastic-labs.png"
                width={150}
                alt="Elastic Labs"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`hidden font-medium sm:block ${link.className} duration-y transform transition hover:scale-110`}
              style={link.style}
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
