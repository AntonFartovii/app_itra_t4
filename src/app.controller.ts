import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { User } from './users/users.model';
import { RolesService } from './roles/roles.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UsersService,
    private roleService: RolesService) {}


  // @UseGuards(JwtAuthGuard)
  @Get('')
  async root(@Res() res: Response) {
    return res.redirect('app')
  }

  @Get('app')
  async app(@Res() res: Response, @Req() req: Request) {
    const users = await this.userService.getAllUsers()
    return res.render('index', {users});
  }

}