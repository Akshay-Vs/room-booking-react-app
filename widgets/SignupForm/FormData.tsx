'use client';
import { Button, TextInputPrimary, Typography } from '@/shared/components';
import { loginUser, registerUser } from '@/shared/services';
import React, { useState } from 'react';

const LoginInputs = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const handleInputChange = async (
    text: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(text);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('isLogged', 'true');

    const res: any = await registerUser({
      name: fullName,
      email: email,
      password: password,
    });

    if (res.status === 201) {
      loginUser({
        name: fullName,
        email: email,
        password: password,
      });
      return (location.href = '/');
    }

    console.log('Response', res.status);
    setError(res.message);
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  return (
    <div className="w-full h-full">
      <form
        className="w-full h-full flex flex-col justify-center items-center gap-8 mt-2"
        onSubmit={handleSubmit}
      >
        <TextInputPrimary
          placeholder="Enter Your Full Name"
          type="text"
          value={fullName}
          onChange={(e) => handleInputChange(e.target.value, setFullName)}
          props={{
            autoComplete: 'name',
            autoFocus: true,
            required: true,
            name: 'name',
          }}
        />
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
          placeholder="Create a Password"
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e.target.value, setPassword)}
          props={{
            autoComplete: 'new-password',
            required: true,
            name: 'password',
            minLength: 6,
          }}
        />
        <Button className="w-full">Create Account</Button>

        {error && (
          <Typography.Paragraph className="flex justify-center w-full px-5 m-0 text-xl text-red-600">
            {error}
          </Typography.Paragraph>
        )}
      </form>
    </div>
  );
};

export default LoginInputs;
