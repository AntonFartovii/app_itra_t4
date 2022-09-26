
import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { Post } from '../posts/posts.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({ example: '1', description: '' })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'mail@mail.ru', description: 'Почтовый ящик' })
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({ example: 'Ivan', description: 'Имя' })
  @Column({type: DataType.STRING})
  name: string;

  @ApiProperty({ example: '123', description: 'Пароль' })
  @Column({type: DataType.STRING, allowNull: false})
  password: string;


  @Column({type: DataType.DATE})
  authorizeAt: Date;

  @ApiProperty({ example: 'true', description: 'Забанен или нет' })
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({ example: 'За хулиганство', description: 'Забанен или нет' })
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany( () => Role, () => UserRoles)
  roles: Role[]

  @HasMany( ()=> Post)
  posts: Post[]

}