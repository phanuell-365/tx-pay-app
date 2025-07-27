import React, { useState } from 'react';
import MenuButton from '@/components/MegaMenu/MenuButton.tsx';

export interface MenuItemProps {
  children?: React.ReactNode;
  title: string;
  more?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, more }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      // className="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] md:[--is-collapse:false] md:[--strategy:absolute]"
      className={
        'hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] md:[--is-collapse:false] md:[--strategy:absolute]'
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MenuButton title={title} isOpen={open} more={more} />

      {more && (
        <div
          className={
            'hs-dropdown-menu duration-[0.1ms] md:duration-[150ms] top-full z-10 transition-[opacity,margin] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full md:w-[705px] ' +
            (open ? 'absolute m-0 opacity-100' : 'relative hidden opacity-0')
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-header-base-mega-menu-medium"
        >
          <div className="md:mx-6 md:rounded-lg md:bg-white md:shadow-md lg:mx-8">
            {/* Grid */}
            <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-5 md:gap-0 md:pt-0">
              <div className="col-span-3 md:p-3">
                {/* Grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-1">
                  <div>
                    <div className="flex flex-col">
                      <div className="space-y-0.5">
                        <span className="mb-2 ms-2.5 text-xs font-semibold uppercase text-gray-800">
                          About us
                        </span>

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Support Docs</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Integrations</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" x2="8" y1="13" y2="13" />
                            <line x1="16" x2="8" y1="17" y2="17" />
                            <line x1="10" x2="8" y1="9" y2="9" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Guides</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m7 11 2-2-2-2" />
                            <path d="M11 13h4" />
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">API Reference</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">API Status</p>
                          </div>
                        </a>
                        {/* End Link */}
                      </div>
                    </div>
                  </div>
                  {/* End Col */}

                  <div>
                    <div className="flex flex-col">
                      <div className="space-y-0.5">
                        <span className="mb-2 ms-2.5 text-xs font-semibold uppercase text-gray-800">
                          Support
                        </span>

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Help Center</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Developer Hub</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Community Forum</p>
                          </div>
                        </a>
                        {/* End Link */}
                      </div>

                      <div className="mt-3 space-y-0.5 md:mt-7">
                        <span className="mb-2 ms-2.5 text-xs font-semibold uppercase text-gray-800">
                          Partners
                        </span>

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Become a Partner</p>
                          </div>
                        </a>
                        {/* End Link */}

                        {/* Link */}
                        <a
                          className="focus:outline-hidden flex gap-x-3 rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m15 5 4 4" />
                            <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                            <path d="m8 6 2-2" />
                            <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                            <path d="m18 16 2-2" />
                            <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                          </svg>
                          <div className="grow">
                            <p className="text-sm text-gray-800">Build on Preline</p>
                          </div>
                        </a>
                        {/* End Link */}
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>
              {/* End Col */}

              <div className="md:col-span-2">
                <div className="flex flex-col p-2 md:h-full md:flex-1 md:rounded-br-lg md:bg-gray-50 md:p-4">
                  <span className="mb-2 text-xs font-semibold uppercase text-gray-800">
                    Customer stories
                  </span>

                  {/* Link */}
                  <a
                    className="focus:outline-hidden group flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-2"
                    href="#"
                  >
                    <img
                      className="size-28 shrink-0 rounded-lg object-cover md:w-full"
                      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                      alt="Customer Story Image"
                    />
                    <div className="grow">
                      <p className="text-sm text-gray-800">
                        Preline Projects has proved to be most efficient cloud based project
                        tracking and bug tracking tool.
                      </p>
                      <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline">
                        Learn more
                        <svg
                          className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </p>
                    </div>
                  </a>
                  {/* End Link */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
      )}
      {/* End Mega Menu */}
    </div>
  );
};

export default MenuItem;
