// import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';


export class UserDto {
  // id?:string

  // @IsNotEmpty({ message: 'The user login cannot be empty' })
  // @IsString({ message: 'The user login must be a string' })
  login: string

  // @IsNotEmpty({ message: 'The user password cannot be empty' })
  // @IsString({ message: 'The user password must be a string' })
  // @Length(3,50, {message: 'Длина должна быть от 3 до 50'})
  password: string

  // @IsInt()
  // @IsOptional()
  // version: number;
  //
  // @IsInt()
  // @IsOptional()
  // createdAt: number;
  //
  // @IsInt()
  // @IsOptional()
  // updatedAt: number;
}