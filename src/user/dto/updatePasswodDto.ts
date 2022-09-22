
// import { IsNotEmpty, IsString } from 'class-validator';

// import { IsNotEmpty } from 'class-validator';

export class UpdatePasswordDto {
  // @IsString()
  // @IsNotEmpty()
  oldPassword: string;

  // @IsString()
  // @IsNotEmpty()
  newPassword: string;
}