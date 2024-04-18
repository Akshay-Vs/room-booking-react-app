import jwt, { JwtPayload } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { IRequest } from '../interfaces/IRequest';

const protect = asyncHandler(async (req: IRequest, res, next) => {
  let token: string;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
      req.user = await User.findById(decode.userId).select('-password');
      next();
    } catch (err) {
      res.status(401);
      throw new Error('Unauthorized: Invalid Token');
    }
  } else {
    res.status(401);
    throw new Error('Unauthorized: No Token');
  }
});

export { protect };
