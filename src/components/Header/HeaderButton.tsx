import React from 'react';

export interface HeaderButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ icon, label, onClick, className }) => {
  return (
    <button
      type="button"
      className={`py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-sm focus:outline-hidden focus: disabled:opacity-50 disabled:pointer-events-none ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default HeaderButton;
