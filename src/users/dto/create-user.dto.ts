import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';


export class CreateUserDto {

  @ApiProperty({
    example: 'mail@mail.com',
    description: 'Почтовый ящик'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({},{message: "Неправильный формат email"})
  readonly email: string;

  @ApiProperty({ example: '123', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @Length(3,50, {message: 'Длина должна быть от 4 до 50'})
  readonly password: string;
}