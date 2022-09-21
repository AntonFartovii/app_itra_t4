import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  @Get('login')
  login(@Res() res: Response) {
    return res.render('auth/login', {});
  }

  @Get('logout')
  logout(@Res() res: Response) {
    return res.render('index', {});
  }

}
