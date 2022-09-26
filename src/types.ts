import { User } from './users/users.model';
declare module 'express-session' {
  interface SessionData {
    user: User;
    isAuthenticated: boolean,
  }
}