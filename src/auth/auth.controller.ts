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
    req.session.destroy( () => {
        res.redirect('/')
    })
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
      const user = await this.authService.login( userDto )
      if (user) {
        req.session.isAuthenticated = true;
        req.session.user = user
      }

      req.session.save( err => {
        if (err) { throw err }
        res.render('index', {e: 'Вы авторизованы'});
      } )
    } catch (e) {
      return res.render('index', {e});
    } finally {
      return res.redirect('/')
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
