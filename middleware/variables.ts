import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


export function logger(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log('req.headers.authorization', req.headers.Authorization);
      // console.log('req.cookies[\'AuthToken\']', req.cookies['AuthToken']);
      // const authorizationHeader = req.headers.authorization;
      // if (!authorizationHeader) return next();
      //
      // const accessToken = authorizationHeader.split(' ')[1];
      // if (!accessToken) return next();

      // if  (req.cookies['AuthToken']) {
      //   res.locals.isAuth = true;
      // };

      next();
    } catch (e) {
      return next();
    }
  next();
};