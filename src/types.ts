import { User } from './users/users.model';
// import { Session } from 'express-session'
declare module 'express-session' {
  interface Session {
    user: User;
    isAuthenticated: boolean,
  }
}