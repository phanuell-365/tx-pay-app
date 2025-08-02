import React, { useRef, useState } from 'react';
import MenuButton from '@/components/MegaMenu/MenuButton.tsx';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { MenuPanel } from '@/components/MegaMenu/MenuPanel.tsx';

export interface MenuItemProps {
  children?: React.ReactNode;
  title: string;
  more?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, more, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const closePopover = useClose();

  const popOverButton = useRef<HTMLButtonElement>(null);

  const handleHover = (value: boolean) => {
    if (value) {
      // console.debug('hover');
      // console.debug('popOverButton', popOverButton.current);
      if (popOverButton.current) {
        // console.debug('popOverButton', popOverButton.current);
        // popOverButton.current.click();
        setIsOpen(true);
      }
    } else {
      // closePopover();
      setIsOpen(false);
    }
  }

  return (
    <Popover>
      <>
        <MenuButton
          title={title}
          more={more}
          onHover={handleHover}
        />
        {/* <MenuButton title={title} isOpen={open} more={more} onClick={openPopover}/> */}

        <PopoverButton
          ref={popOverButton}
          className="block data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white text-sm/6 font-semibold text-white/50 focus:outline-none"
        ></PopoverButton>

        {more && isOpen && (
          <PopoverPanel
            transition
            static
            anchor="bottom"
            className="data-closed:-translate-y-1 data-closed:opacity-0 divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)]"
          >
            {children || <MenuPanel />}
          </PopoverPanel>
        )}
      </>
    </Popover>
  );
};

export default MenuItem;
