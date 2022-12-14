import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Response, Request  } from 'express';
import { UsersService } from '../users/users.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private userService: UsersService) {
  }

  // Logout
  @Get('logout')
  logout( @Res() res: Response, @Req() req: Request) {
   return this.authService.logout( res )
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
    let options = {token: null, isAuth: false, users: null}

    try {
      const { token, user } = await this.authService.login(userDto)
      if ( token ) {
        const users = await this.userService.getAllUsers()
        options = {token, isAuth: true, users}
        res.cookie('AuthToken', token)
        res.cookie('user', JSON.parse( JSON.stringify(user, null, 2) ))
      }

      res.render('index', options );
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
