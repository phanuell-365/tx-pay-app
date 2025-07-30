import React from 'react';

export interface FeatureSlideItemProps {
  title: string;
  description: string;
  link: string;
  image: React.ReactNode;
  linkUrl: string;
}

export const FeatureSlideItem: React.FC<FeatureSlideItemProps> = ({
  title,
  description,
  link,
  image,
  linkUrl,
}) => {
  return (
    <div className="grid grid-cols-1 rounded-xl p-9">
      <div className={`animate-floating-tilt-left-in bg-base-300 p-6 rounded-lg shadow-lg`}>
        <div className="mb-4 h-60 rounded-lg bg-base-content/10 p-2">{image}</div>
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-4 text-base-content/80">{description}</p>
        </div>
        <div className="mt-4 flex flex-row gap-4">
          <a
            className={`focus:outline-hidden inline-flex items-center rounded border border-primary bg-transparent px-3 py-2 font-manrope-semi-bold text-sm text-primary transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-base-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95`}
            href={linkUrl}
          >
            <span className="text-sm">{link}</span>
          </a>
          {/*<a*/}
          {/*  href={linkUrl}*/}
          {/*  className="inline-flex items-center rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-secondary"*/}
          {/*>*/}
          {/*  {link}*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  );
};
