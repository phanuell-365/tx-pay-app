import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createFileRoute } from '@tanstack/react-router';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HeroButton } from '@/components/Button/HeroButton.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error This import is necessary for Swiper styles
import 'swiper/css';
import { Autoplay, EffectFade, FreeMode, Mousewheel } from 'swiper/modules';
import {
  FeatureSlideItem,
  type FeatureSlideItemProps,
} from '@/components/Site/FeatureSlideItem.tsx';
import { PaymentMethod, type PaymentMethodProps } from '@/components/Site/PaymentMethod.tsx';

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

  const featureSlideItems: FeatureSlideItemProps[] = [
    {
      title: 'P2P Trading',
      description:
        'Trade directly with other users using our escrow-based peer-to-peer platform with multiple payment methods.',
      image: (
        <DotLottieReact
          src="https://assets1.lottiefiles.com/packages/lf20_vybwn7df.json"
          autoplay
          loop
        />
      ),
      link: 'Learn More',
      linkUrl: '#',
    },
    {
      title: 'Agency Module',
      description:
        'Become an agent and facilitate cash deposits and withdrawals for users in your local area.',
      image: (
        <img
          className="h-full w-full rounded-xl shadow-2xl transition-transform ease-in-out"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Feature Image"
        />
      ),
      link: 'Learn More',
      linkUrl: '#',
    },
    {
      title: 'Affiliate Marketing',
      description:
        'Earn commissions by inviting others to join TradeX. Get rewarded for every active trader you bring to the platform.',
      image: (
        <DotLottieReact
          src="https://assets1.lottiefiles.com/packages/lf20_5tkzkblw.json"
          autoplay
          loop
        />
      ),
      link: 'Learn More',
      linkUrl: '#',
    },
    {
      title: 'Reports Center',
      description:
        'Comprehensive financial reporting and trade analysis tools to track your performance and maintain audit records.',
      image: (
        <DotLottieReact
          src="https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json"
          autoplay
          loop
        />
      ),
      link: 'Learn More',
      linkUrl: '#',
    },
  ];

  const paymentMethods: PaymentMethodProps[] = [
    {
      name: 'PayPal',
      icon: ['fab', 'paypal'],
      className: 'text-blue-600',
    },
    {
      name: 'MasterCard',
      icon: ['fab', 'cc-mastercard'],
      className: 'text-red-600',
    },
    {
      name: 'Visa',
      icon: ['fab', 'cc-visa'],
      className: 'text-blue-800',
    },
    {
      name: 'Bitcoin',
      icon: ['fab', 'bitcoin'],
      className: 'text-yellow-500',
    },
    {
      name: 'Ethereum',
      icon: ['fab', 'ethereum'],
      className: 'text-purple-600',
    },
    {
      name: 'Stripe',
      icon: ['fab', 'stripe'],
      className: 'text-blue-500',
    },
    {
      name: 'Apple Pay',
      icon: ['fab', 'apple-pay'],
      className: 'text-black',
    },
  ];

  // Initialize Swiper

  // const comprehensiveTradingFeaturesSwiper = new Swiper();

  return (
    <>
      <section id={`advanced-trading-platform`}>
        <div className="mx-auto max-w-[85rem] px-4 pb-14 sm:px-6 md:py-14 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center lg:gap-x-8 xl:gap-x-12">
            <div className="grid grid-cols-1 gap-4 lg:col-span-6">
              <h1 className="block text-wrap text-center font-manrope-bold text-4xl text-base-content sm:text-4xl md:text-5xl lg:text-start lg:text-6xl">
                Advanced Trading Platform for Modern Traders
              </h1>

              <div className="lg:mx-r mx-auto grid grid-cols-1 gap-4 lg:ml-0">
                <div className="mt-5 flex flex-row items-center gap-x-2 sm:gap-x-6 lg:mt-8">
                  <div className="">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="input input-primary !rounded text-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  <a
                    className="inline-flex h-12 items-center rounded bg-primary px-4 py-2 font-manrope-semi-bold text-base text-base-100 transition-all duration-300 ease-in-out hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95 md:text-lg"
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
                    className="hover:bg-secondary-focus w-full rounded-full bg-secondary px-6 py-4 font-manrope-semi-bold text-lg text-base-100 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95"
                    type="button"
                    aria-label="More options"
                  >
                    Try Demo Account
                  </button>
                </div>
              </div>
              {/* End Brands */}
            </div>
            {/* End Col */}

            <div className="mt-10 lg:col-span-6 lg:mt-0">
              <div className={'mx-auto w-full max-w-[500px]'}>
                <img
                  className="w-full animate-floating-tilt-right-in rounded-xl shadow-2xl transition-transform ease-in-out hover:scale-105"
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
        <div className="mx-auto flex max-w-[85rem] flex-col items-center gap-x-8 py-14 sm:px-6 lg:px-8">
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
        <div className="mx-auto flex max-w-[85rem] items-center justify-center px-4 py-6 sm:px-6 lg:px-8 lg:py-20">
          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
            <div>
              <h1 className="block font-manrope-bold text-3xl text-base-content sm:text-4xl lg:text-6xl lg:leading-tight">
                Trade Multiple Markets
              </h1>
              <p className="mt-3 text-lg text-base-content/80">
                Access a wide range of financial markets from a single platform. Trade forex,
                cryptocurrencies, commodities, and synthetic assets with competitive spreads and
                lightning-fast execution.
              </p>

              {/* Buttons */}
              <div className="mt-7 w-full gap-3 md:inline-flex">
                {/* Trade Markets */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

      <section id={`comprehensive-trading-features`}>
        <div className="mx-auto flex w-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8 lg:py-20">
          {/* Grid */}
          <div className="grid lg:grid-cols-12 lg:items-center lg:gap-x-8 xl:gap-x-12">
            <div className="mt-10 lg:col-span-6 lg:mt-0">
              <div className="mx-auto flex w-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8 lg:py-20">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect={'fade'}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  spaceBetween={3}
                  slidesPerView={1}
                >
                  {featureSlideItems.map(({ title, description, link, image, linkUrl }) => (
                    <SwiperSlide key={title}>
                      <FeatureSlideItem
                        title={title}
                        description={description}
                        link={link}
                        image={image}
                        linkUrl={linkUrl}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="lg:col-span-6 lg:mt-0">
              <h1 className="block font-manrope-bold text-2xl text-base-content sm:text-4xl md:text-5xl lg:text-6xl">
                Comprehensive Trading Features
              </h1>

              <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
                <p className="text-base-content/80">
                  Our platform offers everything you need for successful trading, from manual
                  execution to advanced automation and social features.
                </p>
              </div>

              <div className="mt-3 flex w-full flex-row items-center gap-x-8">
                <HeroButton href={'#'} label={'View All Features'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={`trade-with-confidence`}>
        <div className="rounded-t-[3rem] bg-gradient-to-b from-base-300 to-transparent pt-16 md:mx-auto md:rounded-t-[5rem] md:pt-28 lg:pt-32 2xl:px-36">
          <div className="mx-auto md:px-8 xl:max-w-7xl">
            <div className="mx-auto mb-28 flex max-w-5xl flex-col items-center justify-center gap-y-8">
              <h1 className="block text-center font-manrope-extra-bold text-3xl text-base-content sm:text-4xl md:mb-12 md:font-manrope-bold md:text-5xl lg:text-6xl">
                <span className={``}>Supported Payment Methods</span>
                <span className={`ml-3 mt-6 md:block`}>
                  in
                  <span className="ml-3 mt-1 inline-block rounded-2xl border-4 border-primary bg-base-100 px-4 py-1 font-manrope-bold text-primary shadow-2xl shadow-primary md:rounded-3xl">
                    TradeX
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-center text-sm text-base-content/80 md:text-base">
                TradeX supports a wide range of payment methods to ensure you can deposit and
                withdraw funds with ease. Whether you prefer bank transfers, credit cards, or
                cryptocurrencies, we have you covered.
              </p>
            </div>

            <div className="relative mx-auto mt-10 h-64">
              <Swiper
                modules={[Autoplay, Mousewheel, FreeMode]}
                autoplay={true}
                loop={true}
                spaceBetween={30}
                slidesPerView={2}
                mousewheel={true}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
              >
                {paymentMethods.map((method) => (
                  <SwiperSlide key={method.name}>
                    <PaymentMethod
                      name={method.name}
                      icon={method.icon}
                      className={method.className}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
