import { HTMLAttributes } from 'react';

export interface IExtendables<T extends HTMLElement> {
  className?: string;
  props?: HTMLAttributes<T>;
}
