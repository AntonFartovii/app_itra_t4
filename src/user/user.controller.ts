import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Param,
  ParseUUIDPipe, Put, Delete, UseInterceptors, ClassSerializerInterceptor,
} from '@nestjs/common';

import { UserService } from './user.service'
import { UserDto } from './dto/user.dto';
import { UpdatePasswordDto } from './dto/updatePasswodDto';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', new ParseUUIDPipe({ version: '4' }))
      id: string){
    return await this.userService.findOne( id )
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: UserDto) {
    return await this.userService.create( dto )
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() dto: UpdatePasswordDto) {
    return await this.userService.update( id, dto )
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param('id', new ParseUUIDPipe({ version: '4' }))
      id: string): Promise<void> {
    await this.userService.delete( id )
  }
}