import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateStockDto {
  @IsNumber()
  @ApiProperty()
  quantity: number;
  @IsNumber()
  @ApiProperty()
  productId: number;
}
