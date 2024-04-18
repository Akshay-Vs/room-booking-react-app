'use client';
import { Button, TextInputPrimary, Typography } from '@/shared/components';
import { loginSchema } from '@/shared/validation/LoginFormValidation';
import Link from 'next/link';
import { abort } from 'process';
import React, { useState } from 'react';

const LoginInputs = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('hai');

  const handleInputChange = async (
    text: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    // try {
    //   await loginSchema.validate({ email, password }, { abortEarly: false });
    //   setError('');
    // } catch (err: any) {
    //   setError(err);
    // }
    setValue(text);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-full">
      <form
        className="w-full h-full flex flex-col justify-center items-center gap-8 mt-2"
        onSubmit={handleSubmit}
      >
        <TextInputPrimary
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e.target.value, setEmail)}
          props={{
            autoComplete: 'email',
            autoFocus: true,
            required: true,
            name: 'email',
          }}
        />
        <TextInputPrimary
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e.target.value, setPassword)}
          props={{
            autoComplete: 'current-password',
            required: true,
            name: 'password',
            minLength: 6,
          }}
        />
        <Button className="w-full">Login</Button>
        <Typography className="w-full flex flex-col">
          <Typography.Paragraph className="flex justify-end w-full px-5">
            <Link href="/forgot-password">Forgot Password?</Link>
          </Typography.Paragraph>
        </Typography>
      </form>
      {/* {error && (
        <Typography className="w-full flex flex-col">
          <Typography.Paragraph className="flex justify-center w-full px-5 text-red-600">
            {error}
          </Typography.Paragraph>
        </Typography>
      )} */}
    </div>
  );
};

export default LoginInputs;
