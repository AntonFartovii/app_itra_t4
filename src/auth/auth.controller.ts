import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Response, Request  } from 'express';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService) {
  }

  // Logout
  @Get('logout')
  logout( @Res() res: Response, @Req() req: Request) {

  }

  @Get('login')
  root(@Res() res: Response) {
    return res.redirect('/')
  }

  @Get('')
  root2(@Res() res: Response) {
    return res.redirect('/')
  }

 // Authorization
  @Post('/login')
  async login(
    @Body() userDto: CreateUserDto,
    @Res() res: Response,
    @Req() req: Request ) {

    try {
      await this.authService.login( userDto )
      res.redirect('/')
    } catch (e) {
      res.render('index', {e});
    }

  }

  // Registration
  @Post('/registration')
  async registration(@Body() userDto: CreateUserDto,
               @Res() res: Response,
               @Req() req: Request ) {
    try {
      const token = await this.authService.registration( userDto )
      return res.render('index',{e: 'Вы успешно зарегистрировались'});
    } catch (e) {
      return res.render('index', {e});
    }

  }
}
