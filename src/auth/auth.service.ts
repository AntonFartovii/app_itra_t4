import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { User } from '../users/users.model';
import { BanUserDto } from '../roles/dto/ban-user.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService) {
  }

 async logout ( res: Response ) {
  res.locals.isAuth = false
  res.clearCookie('AuthToken')
  res.render('index', { token: '', isAuth: false });
}

  async login( userDto: CreateUserDto ) {
    {
      const user: User = await this.validateUser(userDto);
      if ( user.banned ) throw new Error('User banned');
      user.authorizeAt = new Date();
      await user.save();
      const token = await this.generateToken(user);
      return { user, token };
    }
  }


  async registration( userDto: CreateUserDto ) {
    const candidate = await this.userService.getUsersByEmail( userDto.email )
    if ( candidate ) {
      throw new HttpException(
        'Пользователь с таким именем уже существует',
        HttpStatus.BAD_REQUEST)
    }

    const hashPassword = await bcrypt.hash( userDto.password, 5 )
    const user = await this.userService.createUser({...userDto, password: hashPassword})
    return this.generateToken(user)
  }

  private async generateToken( user: User ) {
    const payload = {email: user.email, id: user.id, roles: user.roles}
    return this.jwtService.sign( payload )
  }

  private async validateUser( userDto: CreateUserDto ) {
    const user = await this.userService.getUsersByEmail( userDto.email )
    const passwordEquals = await bcrypt.compare( userDto.password, user.password)
    if (user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException(
      {message: 'Некорректный email или password'})
  }

}
