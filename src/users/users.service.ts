import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '../roles/roles.model';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from '../roles/dto/add-role.dto';
import { BanUserDto } from '../roles/dto/ban-user.dto';
import { deleteUserDto } from './dto/deleteUserDto';



@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private roleService: RolesService) {}

  async createUser( dto: CreateUserDto) {
    const user = await this.userRepository.create( dto )
    const role = await this.roleService.getRoleByValue('User')
    || await this.roleService.createRole({
        "value": "User",
        "description": "user"
      })

    await user.$set('roles', [role.id])
    user.roles = [role]
    return user
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include: {all: true}})
    return JSON.parse( JSON.stringify(users, null, 2) )
  }

  async addRole( dto: AddRoleDto ) {
    const user = await this.userRepository.findByPk( dto.userId )
    const role = await this.roleService.getRoleByValue( dto.value )
    if ( role && user ) {
      await user.$add('role', role.id)
      return dto
    }

    throw new HttpException('', HttpStatus.NOT_FOUND)
  }

  async delete( ids: string[]) {
    return  await this.userRepository.destroy( {
      where: {id: ids}
    })
  }

  async ban( ids: string[] ) {
    const users = await this.userRepository.findAll( {where: {id: ids}} )
    if ( !users ) throw new HttpException('', HttpStatus.NOT_FOUND)
    return users.forEach( (user) => {
      user.banned = true
      user.save()
    })
  }

  async unban( ids: string[] ) {
    const users = await this.userRepository.findAll( {where: {id: ids}} )
    if ( !users ) throw new HttpException('', HttpStatus.NOT_FOUND)
    return users.forEach( (user) => {
      user.banned = false
      user.save()
    })
  }

  async getUsersByEmail( email: string ) {
    const user = await this.userRepository.findOne({
        where:   {email},
        include: {all: true}
      })
    return user
  }

  async getUsersById( id: string ) {
    const user = await this.userRepository.findOne({
      where: { id }
    })
    return user
  }

}
