import { HTMLAttributes } from 'react';
import { IChildren } from './IChildren';

export interface IExtendablesWithChildren<T extends HTMLElement>
  extends IChildren {
  className?: string;
  props?: HTMLAttributes<T>;
}
