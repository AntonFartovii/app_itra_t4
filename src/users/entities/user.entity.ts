import {
  Column, CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { Exclude, Transform } from 'class-transformer';

@Entity('user')
export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  login: string

  @Column()
  @Exclude()
  password: string

  @Column()
  version: number

  @CreateDateColumn()
  @Transform(({ value }) => new Date(value).getTime())
  createdAt: number;

  @UpdateDateColumn()
  @Transform(({ value }) => new Date(value).getTime())
  updatedAt: number;

}
