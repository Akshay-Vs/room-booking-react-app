import { Request } from 'express';

export interface IRequest extends Request {
  user: {
    _id?: string;
    name?: string;
    email?: string;
  };
}
