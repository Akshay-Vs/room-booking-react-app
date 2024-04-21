import React from 'react';
import './TextInputs.scss';
import { IExtendables, IExtendablesWithChildren } from '@/shared/interfaces';
import { text } from 'stream/consumers';

interface ITextInputProps extends IExtendablesWithChildren<HTMLInputElement> {
  placeholder?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  value?: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ITextAreaProps extends IExtendablesWithChildren<HTMLTextAreaElement> {
  placeholder?: string;
  type?: string;
  props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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

export const TextAreaInput = ({
  className,
  placeholder,
  value,
  onChange,
  props,
  type = 'text',
}: ITextAreaProps) => {
  return (
    <textarea
      className={`text-input__input-area ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export const TextInputWithLogo = ({
  className,
  placeholder,
  value,
  onChange,
  props,
  children,
  type = 'text',
}: ITextInputProps) => {
  return (
    <div className="text-input__input-logo">
      <input
        type={type}
        className={`text-input__input-logo__input ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {children}
    </div>
  );
};
