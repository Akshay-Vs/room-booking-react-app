import { IRequest } from '../interfaces/IRequest';
import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  err: Error,
  req: IRequest,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === 'CastError' && (err as any).kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
