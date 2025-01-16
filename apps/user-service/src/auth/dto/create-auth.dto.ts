import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;
}
