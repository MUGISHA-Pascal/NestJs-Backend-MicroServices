import {
  IsString,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  IsUrl,
  IsDate,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsInt()
  stock?: number;

  @IsInt()
  categoryId: number;
}
