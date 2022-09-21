import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }
  @Post('/login')
  @HttpCode( HttpStatus.OK )
  signin(@Body() dto: CreateUserDto){
    // return this.authService.signin( dto );
  }

}
