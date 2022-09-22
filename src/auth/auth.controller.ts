import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  @Get('login')
  root(@Res() res: Response) {
    return res.render('auth/login', {});
  }

  @Post('login')
  login(@Res() res: Response, @Req() req: Request) {
    // если находит юзера
    // то перенаправляет на /
    return res.render('auth/login', {});
  }

  @Get('logout')
  logout(@Res() res: Response, @Req() req: Request) {
    req.session.destroy(() => {
      return res.render('index', {});
    })
  }
}