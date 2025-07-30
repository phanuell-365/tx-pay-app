import React from 'react';

export interface HeaderButtonProps {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ icon, label, onClick, className }) => {
  return (
    <button
      type="button"
      className={`focus:outline-hidden focus: inline-flex items-center rounded px-3 py-2 font-manrope-semi-bold text-sm transition-colors duration-300 ease-in-out active:scale-95 disabled:pointer-events-none disabled:opacity-50 ${icon ? 'gap-x-2' : ''} ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default HeaderButton;
