import {
  BadRequestException, HttpException, HttpStatus,
  Injectable,
  NotFoundException,
}
  from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UpdatePasswordDto } from './dto/updatePasswodDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository( UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
  }

  async getUserByLogin( login: string ) {
    const user = await this.userRepository.findOne({
      where: { login: login }
    })
    return user
  }

  async create( dto: UserDto ) {
    const user = this.userRepository.create( new UserEntity({...dto, version: 1 }) )
    return await this.userRepository.save( user )
  }

  async findAll() {
    const users = this.userRepository.find()
    return users
  }

  async findOne( id: string ) {
    const user = await this.userRepository.findOne({ where: { id } })

    if ( user) return user;
    throw  new NotFoundException(`User id = ${id} not found`)

  }

  async update( id: string, dto: UpdatePasswordDto ) {

    const user = await this.userRepository.findOne({ where: { id } })

    if ( !user ) {
      throw new NotFoundException(`User id = ${id} not found`)
    }

    const { oldPassword, newPassword } = dto

    if (oldPassword !== user.password) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }

    const newUser  = new UserEntity({
      id: user.id,
      login: user.login,
      password: newPassword,
      version: user.version + 1
    })


    Object.assign( user, newUser )
    return await this.userRepository.save( user )



  }

  async delete( id: string ) {

    const res = await this.userRepository.delete( id )

    if ( res.affected === 0) {
      throw new NotFoundException(`User id = ${id} not found`)
    }
  }

  async findByLogin( login ) {
    const user = await this.userRepository.findOne({ where: { login }})

    if ( user ) return user
  }

  async isLoginExists( login: string ) {
    const user = await this.findByLogin( login )
    if ( user )
      throw new BadRequestException(
        `User with login = ${login} already exists`)
  }
}