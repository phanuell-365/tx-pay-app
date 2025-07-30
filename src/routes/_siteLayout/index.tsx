import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createFileRoute } from '@tanstack/react-router';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HeroButton } from '@/components/Button/HeroButton.tsx';

interface TradeMarket {
  name: string;
  className: string;
}

export const Route = createFileRoute('/_siteLayout/')({
  component: RouteComponent,
});

function RouteComponent() {
  const awards: { name: string; icon: IconProp }[] = [
    { name: 'Best Trading Platform 2023', icon: 'award' },
    { name: 'Innovation Award', icon: 'trophy' },
    { name: 'Customer Choice', icon: 'medal' },
    { name: 'Top Rated', icon: 'star' },
  ];

  const tradeMarkets: TradeMarket[] = [
    { name: 'Forex', className: 'border-blue-600' },
    { name: 'Cryptocurrencies', className: 'border-purple-600' },
    { name: 'Commodities', className: 'border-yellow-600' },
    { name: 'Synthetic Assets', className: 'border-green-600' },
    { name: 'Indices', className: 'border-red-600' },
    { name: 'Stocks', className: 'border-indigo-600' },
  ];

  return (
    <>
      <section id={`advanced-trading-platform`}>
        <div className="mx-auto max-w-[85rem] px-4 pb-6 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
            <div className="lg:col-span-3">
              <h1 className="block font-manrope-bold text-2xl text-base-content sm:text-4xl md:text-5xl lg:text-6xl">
                Advanced Trading Platform for Modern Traders
              </h1>

              <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
                <div className="w-full sm:w-auto">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="input input-primary text-primary"
                    name="hero-input"
                    className="block w-full min-w-80 rounded-md border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
                    placeholder="Enter work email"
                  />
                </div>
                <a
                  className="focus:outline-hidden inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                  href="#"
                >
                  Sign Up
                </a>
              </div>

              {/* Brands */}
              <div className="mt-3">
                <span className="font-manrope-medium text-xs text-base-content/60">
                  Or sign up with
                </span>

                <div className="mt-4 flex gap-x-8">
                  <button
                    className="focus:outline-hidden flex items-center gap-x-2 rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                    type="button"
                    aria-label="Google"
                  >
                    <FontAwesomeIcon icon={['fab', 'google']} className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    className="focus:outline-hidden flex items-center gap-x-2 rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                    type="button"
                    aria-label="Apple"
                  >
                    <FontAwesomeIcon icon={['fab', 'apple']} className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="mt-3 flex w-full gap-x-8">
                <button
                  className="flex w-full items-center gap-x-2 rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                  type="button"
                  aria-label="More options"
                >
                  Try Demo Account
                </button>
              </div>
              {/* End Brands */}
            </div>
            {/* End Col */}

            <div className="mt-10 lg:col-span-4 lg:mt-0">
              <div className={'mx-auto w-full max-w-[500px]'}>
                <img
                  className="w-full animate-floating rounded-xl shadow-2xl transition-transform ease-in-out hover:scale-105"
                  src="/imgs/hero-1.jpeg"
                  alt="Hero Image"
                />
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>

      <section className="w-full" id={`awards-section`}>
        {/* Awards Section */}
        <div className="mx-auto flex max-w-[85rem] flex-col items-center gap-x-8 py-6 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center gap-y-8">
            <h2 className="mb-6 text-center font-manrope-bold text-2xl text-base-content">
              Our Awards
            </h2>
            {/*<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">*/}
            <div className="flex w-full flex-wrap items-center justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {awards.map((award) => (
                <div
                  key={award.name}
                  className="flex flex-col items-center justify-center rounded-lg p-4"
                >
                  <FontAwesomeIcon icon={award.icon} className="mb-2 h-8 w-8 text-primary" />
                  <p className="font-manrope-medium text-sm text-base-content">{award.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id={`trade-multiple-markets`}>
        {/* Hero */}
        <div className="mx-auto max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
            <div>
              <h1 className="block font-manrope-bold text-3xl text-base-content sm:text-4xl lg:text-6xl lg:leading-tight">
                Trade Multiple Markets
              </h1>
              <p className="mt-3 text-lg text-base-content">
                Access a wide range of financial markets from a single platform. Trade forex,
                cryptocurrencies, commodities, and synthetic assets with competitive spreads and
                lightning-fast execution.
              </p>

              {/* Buttons */}
              <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                {/* Trade Markets */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {tradeMarkets.map((market) => (
                    <p
                      key={market.name}
                      className={`focus:outline-hidden inline-flex cursor-pointer items-center justify-center text-nowrap rounded border px-4 py-3 font-manrope-medium text-sm text-base-content transition-all duration-300 ease-in-out hover:bg-base-200 focus:bg-base-200 active:scale-95 ${market.className}`}
                    >
                      {market.name}
                    </p>
                  ))}
                </div>
              </div>
              {/* End Buttons */}

              {/* Review */}
              <div className="mt-6 flex flex-row items-center gap-x-5 lg:mt-10">
                <HeroButton href={'#'} label={'Explore Markets'} />
              </div>
              {/* End Review */}
            </div>
            {/* End Col */}

            <div className="lrelative ms-4 flex h-full w-full flex-row items-center justify-center">
              <div className="h-[400px] w-1/2 min-w-full rounded-xl bg-base-300 p-4">
                <DotLottieReact
                  src="https://assets10.lottiefiles.com/packages/lf20_zw0djhar.json"
                  width={'100%'}
                  height={'100%'}
                  autoplay
                  loop
                />
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </section>

      <section>
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid lg:grid-cols-7 lg:items-center lg:gap-x-8 xl:gap-x-12">
            <div className="lg:col-span-3">
              <h1 className="block font-manrope-bold text-2xl text-base-content/70 sm:text-4xl md:text-5xl lg:text-6xl">
                Comprehensive Trading Features
              </h1>

              <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
                <p className="text-base-content/70">
                  Our platform offers everything you need for successful trading, from manual
                  execution to advanced automation and social features.
                </p>
              </div>

              <div className="mt-3 flex w-full gap-x-8">
                <button
                  className="flex w-full items-center gap-x-2 rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                  type="button"
                  aria-label="More options"
                >
                  View All Features
                </button>
              </div>
            </div>

            <div className="mt-10 lg:col-span-4 lg:mt-0">
              <div className="feature-slide-image">
                <p>P2P Trading</p>
                <div>
                  Trade directly with other users using our escrow-based peer-to-peer platform with
                  multiple payment methods.
                </div>
                <a href="">Learn More</a>
                <DotLottieReact
                  src="https://assets1.lottiefiles.com/packages/lf20_vybwn7df.json"
                  autoplay
                  loop
                />
              </div>
              <div className="feature-slide-image">
                <p>Agency Module</p>
                <div>
                  Become an agent and facilitate cash deposits and withdrawals for users in your
                  local area.
                </div>
                <a href="">Learn More</a>
                <img
                  className="w-full rounded-xl shadow-2xl transition-transform ease-in-out hover:scale-105"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Feature Image"
                />
              </div>
              <div className="feature-slide-image">
                <p>Affiliate Marketing</p>
                <div>
                  Earn commissions by inviting others to join TradeX. Get rewarded for every active
                  trader you bring to the platform.
                </div>
                <a href="">
                  Earn commissions by inviting others to join TradeX. Get rewarded for every active
                  trader you bring to the platform.
                </a>
                <DotLottieReact
                  src="https://assets1.lottiefiles.com/packages/lf20_5tkzkblw.json"
                  autoplay
                  loop
                />
              </div>
              <div className="feature-slide-image">
                <p>Reports Center</p>
                <div>
                  Comprehensive financial reporting and trade analysis tools to track your
                  performance and maintain audit records.
                </div>
                <a href="">Learn More</a>
                <DotLottieReact
                  src="https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json"
                  autoplay
                  loop
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
