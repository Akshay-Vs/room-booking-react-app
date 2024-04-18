import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const generateToken = (res: Response, userId: Types.ObjectId): void => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
