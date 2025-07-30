import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuItem from '@/components/MegaMenu/MenuItem.tsx';
import { FooterColumn, type FooterColumnProps } from '@/components/Footer/FooterColumn.tsx';
import HeaderButton from '@/components/Header/HeaderButton.tsx';
import { useTheme } from '@/contexts';
import { PopoverGroup } from '@headlessui/react';

export const Route = createFileRoute('/_siteLayout')({
  component: RouteComponent,
});

function RouteComponent() {
  const footerItems: FooterColumnProps[] = [
    {
      title: 'Platform',
      items: [
        { title: 'Pricing', href: '#' },
        { title: 'Changelog', href: '#' },
        { title: 'Docs', href: '#' },
        { title: 'Download', href: '#' },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'About us', href: '#' },
        { title: 'Blog', href: '#' },
        { title: "Careers — We're hiring", href: '#' },
        { title: 'Customers', href: '#' },
        { title: 'Newsroom', href: '#' },
        { title: 'Sitemap', href: '#' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Community', href: '#' },
        { title: 'Help & Support', href: '#' },
        { title: 'eBook', href: '#' },
        { title: "What's New", href: '#' },
        { title: 'Status', href: '#' },
      ],
    },
    {
      title: 'Connect With Us',
      items: [
        { title: 'Api', href: '#' },
        { title: 'Status', href: '#' },
        { title: 'GitHub — New', href: '#' },
      ],
    },
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 bg-base-100/80 backdrop-blur-sm z-50 flex w-full flex-wrap py-3 lg:flex-nowrap lg:justify-start">
        <nav className="relative flex w-full basis-full flex-wrap items-center px-4 md:px-6 lg:grid lg:grid-cols-12 lg:px-8">
          <div className="flex items-center lg:col-span-3">
            {/* Logo */}
            <Link
              to="/"
              className="focus:outline-hidden flex flex-row items-center gap-2 rounded-xl font-manrope-semi-bold text-xl text-primary focus:opacity-80"
              aria-label="Trade X"
            >
              <FontAwesomeIcon icon={['fas', 'chart-line']} className="text-xl" />
              <h1 className="flex items-center gap-2 font-manrope-bold text-2xl">Trade X</h1>
            </Link>
            {/* End Logo */}

            <div className="ms-1 sm:ms-2"></div>
          </div>

          <div className="ms-auto flex items-center gap-x-1 py-1 lg:order-3 lg:col-span-3 lg:gap-x-2 lg:ps-6">
            <HeaderButton
              className="border border-primary text-primary hover:bg-primary hover:text-base-100 focus:bg-accent focus:text-base-100"
              label={'Log In'}
            />
            <HeaderButton
              className="border border-primary bg-primary text-base-100 hover:bg-accent focus:bg-accent"
              label={'Sign In'}
            />
            <button
              className="btn btn-circle btn-sm text-base-content/50 hover:text-primary"
              type="submit"
            >
              <FontAwesomeIcon icon={['fas', 'language']} className="h-4 w-4" />
            </button>
            <button
              className="btn btn-circle btn-sm text-base-content/50 hover:text-primary"
              onClick={toggleTheme}
              type="submit"
            >
              {theme === 'dark' ? (
                <FontAwesomeIcon icon={['fas', 'moon']} className="h-4 w-4" />
              ) : (
                <FontAwesomeIcon icon={['fas', 'sun']} className="h-4 w-4" />
              )}
            </button>
          </div>

          <div
            id="hs-pro-hcail"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 lg:order-2 lg:col-span-6 lg:block lg:w-auto lg:basis-auto"
            aria-labelledby="hs-pro-hcail-collapse"
          >
            <PopoverGroup>
              <div className="mt-5 flex flex-col gap-x-0 gap-y-4 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-x-7 lg:gap-y-0">
                <MenuItem title={'Home'} />

                <MenuItem title={'Features'} more={true} />
                <MenuItem title={'Markets'} />
                <MenuItem title={'Pricing'} />
                <MenuItem title={'About'} />
              </div>
            </PopoverGroup>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}

      <main className="flex min-h-screen flex-col items-center justify-between bg-base-100 py-8 gap-8">
        <Outlet /> {/* Where child routes render */}
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-base-300">
        <div className={`mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8`}>
          {/* Grid */}
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-full hidden grid-cols-1 gap-4 lg:col-span-1 lg:grid">
              <div className="">
                <a
                  className="focus:outline-hidden flex-none font-manrope-semi-bold text-xl text-primary focus:opacity-80"
                  href="#"
                  aria-label="Brand"
                >
                  Trade X
                </a>
                <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                  The most advanced trading platform for synthetic assets, crypto, and forex
                  trading.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-sm bg-gray-100 p-2 hover:bg-gray-200 focus:bg-gray-200">
                  <FontAwesomeIcon icon={['fab', 'cc-visa']} className="text-gray-500" />
                </div>
                <div className="rounded-sm bg-gray-100 p-2 hover:bg-gray-200 focus:bg-gray-200">
                  <FontAwesomeIcon icon={['fab', 'cc-mastercard']} className="text-gray-500" />
                </div>
                <div className="rounded-sm bg-gray-100 p-2 hover:bg-gray-200 focus:bg-gray-200">
                  <FontAwesomeIcon icon={['fab', 'bitcoin']} className="text-gray-500" />
                </div>
                <div className="rounded-sm bg-gray-100 p-2 hover:bg-gray-200 focus:bg-gray-200">
                  <FontAwesomeIcon icon={['fas', 'university']} className="text-gray-500" />
                </div>
              </div>
            </div>

            {footerItems.map((column) => (
              <FooterColumn key={column.title} title={column.title} items={column.items} />
            ))}

            {/*<div>*/}
            {/*  <h4 className="text-base font-manrope-semi-bold text-base-content">Platform</h4>*/}

            {/*  <div className="mt-3 grid space-y-3 text-sm">*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Pricing*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Changelog*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Docs*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Download*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* End Col */}

            {/*<div>*/}
            {/*  <h4 className="text-xs font-semibold uppercase text-gray-900">Company</h4>*/}

            {/*  <div className="mt-3 grid space-y-3 text-sm">*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        About us*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Blog*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Careers*/}
            {/*      </a>{' '}*/}
            {/*      <span className="inline text-blue-600">— We're hiring</span>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Customers*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Newsroom*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Sitemap*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* End Col *!/*/}

            {/*<div>*/}
            {/*  <h4 className="text-sm font-manrope-semi-bold text-base-content">Legal</h4>*/}

            {/*  <div className="mt-3 grid space-y-3 text-sm">*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Community*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Help & Support*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        eBook*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        What's New*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      <a*/}
            {/*        className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800"*/}
            {/*        href="#"*/}
            {/*      >*/}
            {/*        Status*/}
            {/*      </a>*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* End Col *!/*/}
          </div>
          {/* End Grid */}

          <div className="mt-5 border-t border-gray-200 pt-5">
            <h5 className="text-md font-manrope-bold">Risk Warning</h5>

            <p className="mt-2 grid grid-cols-1 gap-3 text-wrap break-words text-sm leading-6 text-gray-600 antialiased">
              <span>
                The Financial Products offered by the company include Contracts for Difference
                ('CFDs') and other complex financial products. Trading CFDs carries a high level of
                risk, since leverage can work both to your advantage and disadvantage. As a result,
                CFDs may not be suitable for all investors because it is possible to lose all of
                your invested capital.{' '}
              </span>
              <span>
                You should never invest money that you cannot afford to lose. Before trading in the
                complex financial products offered, please ensure to understand the risks involved.
                You are granted limited non-exclusive non-transferable rights to use the IP provided
                on this website for personal and non-commercial purposes in relation to the services
                offered on the Website only.
              </span>
              <span>
                The information on this website is not directed at residents of certain
                jurisdictions, including, without limitation, EU/EEA member states, and is not
                intended for distribution to any person in any country or jurisdiction where such
                distribution or use would be contrary to local law or regulation.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
