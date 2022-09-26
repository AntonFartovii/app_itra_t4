import { User } from './users/users.model';
import express from 'express-session'
declare module 'express' {
  interface Session {
    user: User;
    isAuthenticated: boolean,
  }
}