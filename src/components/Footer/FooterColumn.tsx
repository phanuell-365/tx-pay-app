import React from 'react';

interface FooterColumnItem {
  title: string;
  href: string;
}

export interface FooterColumnProps {
  title: string;
  items?: FooterColumnItem[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div>
      <h4 className="font-manrope-semi-bold text-sm text-base-content">{title}</h4>

      <div className="mt-3 grid space-y-3 text-sm">

        {
          items && items.length > 0 ? (
            items.map((item) => (
              <p key={item.title} className="text-gray-500">
                <a
                  className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-primary focus:text-primary"
                  href={item.href}
                >
                  {item.title}
                </a>
              </p>
            ))
          ) : (
            <p className="text-gray-500">No items available</p>
          )
        }
      </div>
    </div>
  );
};

export default FooterColumn;
