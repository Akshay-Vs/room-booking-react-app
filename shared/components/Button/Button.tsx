import React from 'react';
import './Button.scss';
import { IExtendablesWithChildren } from '@/shared/interfaces';

const Button = ({
  children,
  props,
  className,
}: IExtendablesWithChildren<HTMLButtonElement>) => {
  return (
    <button className={`button__primary ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ButtonSecondary = ({
  children,
  props,
  className,
}: IExtendablesWithChildren<HTMLButtonElement>) => {
  return (
    <button className={`button__secondary ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
