import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface PaymentMethodProps {
  name: string;
  icon: IconProp;
  className?: string;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ icon, className }) => {
  return (
    <div className="flex items-center justify-center rounded-[2rem] bg-base-content/10 p-4 h-40">
      <FontAwesomeIcon icon={icon} className={`text-5xl ${className}`} />
    </div>
  );
};
