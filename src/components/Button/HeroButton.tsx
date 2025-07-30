import React from 'react';

export interface HeroButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const HeroButton: React.FC<HeroButtonProps> = ({
  href,
  label,
  icon,
  className,
  onClick,
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center rounded bg-primary px-6 py-3 font-manrope-semi-bold text-lg text-base-100 transition-all duration-300 ease-in-out hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </a>
  );
};
