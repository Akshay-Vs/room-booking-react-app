import React from 'react';
import './TextInputs.scss';
import { IExtendables } from '@/shared/interfaces';
import { text } from 'stream/consumers';

interface ITextInputProps extends IExtendables<HTMLInputElement> {
  placeholder?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  value?: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInputPrimary = ({
  className,
  placeholder,
  value,
  onChange,
  props,
  type = 'text',
}: ITextInputProps) => {
  return (
    <input
      type={type}
      className={`text-input__input-primary ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
