import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post, Req, Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/role-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from '../roles/dto/add-role.dto';
import { BanUserDto } from '../roles/dto/ban-user.dto';
import { deleteUserDto } from './dto/deleteUserDto';
import { Response, Request  } from 'express';
import { AuthService } from '../auth/auth.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) { }

  @ApiOperation({summary:'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @UsePipes(ValidationPipe)
  @Post('')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser( userDto )
  }

  @ApiOperation({summary:'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  // @Roles("Admin")
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }

  @ApiOperation({summary:'Выдыча ролей'})
  @ApiResponse({status: 200})
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole( dto )
  }


  @ApiOperation({summary:'Забанить'})
  @ApiResponse({status: 200})
  // @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post('/ban')
  async ban(
    @Body() dto: any,
    @Res() res: Response,
    @Req() req: Request) {
      try {
        await this.userService.ban( Object.keys( req.body ))
        res.redirect('/')
      } catch (e) {
        res.render('index', {e: 'Error delete'})
      }
    }

  @ApiOperation({summary:'Unban'})
  @ApiResponse({status: 200})
  // @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post('/unban')
  async unban(
    @Body() dto: any,
    @Res() res: Response,
    @Req() req: Request) {
    try {
      await this.userService.unban( Object.keys( req.body ))
      res.redirect('/')

    } catch (e) {
      res.render('index', {e: 'Error delete'})
    }
  }

  @ApiOperation({summary:'Удалить'})
  @ApiResponse({status: 200})
  // @Roles("Admin")
  // @UseGuards(RolesGuard)
  @Post('delete')
  async delete(
    @Body() dto: any,
    @Res() res: Response, @Req() req: Request) {
    try {
          await this.userService.delete(Object.keys( req.body ) )
          res.redirect('/')
        } catch (e) {
          res.render('index', {e: 'Error delete'})
        }
  }
}
