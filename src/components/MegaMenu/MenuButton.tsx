import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MenuButtonProps {
  onHover: (value: boolean) => void;
  title: string;
  isOpen?: boolean;
  more?: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onHover, title, more}) => {
  const [open, setOpen] = useState(false);

  // If isOpen prop is provided, use it to control the open state
  // if (isOpen !== undefined) {
  //   setOpen(isOpen);
  // }

  // const handleClick = () => {
  //   setOpen(!open);
  //   if (onClick) {
  //     onClick(open);
  //   }
  // };

  const onMouseOver = () => {
    setOpen(true);
    // console.debug('onMouseOver called, setting open to true');
    if (onHover) {
      onHover(true);
    }
  }

  const onMouseLeave = () => {
    setOpen(false);
    // console.debug('onMouseLeave called, setting open to false');
    if (onHover) {
      onHover(false);

    }
  }

  return (
    <button
      id="hs-header-base-mega-menu-medium"
      className="focus:outline-hidden flex w-full items-center rounded-lg p-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
      type="button"
      aria-haspopup="menu"
      aria-expanded={open ? 'true' : 'false'}
      aria-label="Mega Menu"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {title}
      {more && (
        <FontAwesomeIcon
          icon="chevron-down"
          className={
            'ml-2 text-primary transition-transform duration-300 ' +
            (open ? 'rotate-180' : 'rotate-0')
          }
        />
      )}
    </button>
  );
};

export default MenuButton;
