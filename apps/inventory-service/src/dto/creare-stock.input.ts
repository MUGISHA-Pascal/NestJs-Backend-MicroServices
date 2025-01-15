import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateStockDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  productId: number;
}
