import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MenuButtonProps {
  onClick?: () => void;
  title: string;
  isOpen?: boolean;
  more?: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick, title, isOpen, more }) => {
  const [open, setOpen] = useState(false);

  // If isOpen prop is provided, use it to control the open state
  // if (isOpen !== undefined) {
  //   setOpen(isOpen);
  // }

  const handleClick = () => {
    setOpen(!open);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      id="hs-header-base-mega-menu-medium"
      type="button"
      className="focus:outline-hidden flex w-full items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
      aria-haspopup="menu"
      aria-expanded={open ? 'true' : 'false'}
      aria-label="Mega Menu"
      onClick={handleClick}
    >
      {title}
      {more && (
        <FontAwesomeIcon
          icon="chevron-down"
          className={
            'ml-2 text-primary transition-transform duration-300 ' +
            (isOpen ? 'rotate-180' : 'rotate-0')
          }
        />
      )}
    </button>
  );
};

export default MenuButton;
