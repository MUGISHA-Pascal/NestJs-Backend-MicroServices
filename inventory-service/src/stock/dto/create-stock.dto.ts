import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class CreateStockDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
  @IsNumber()
  @IsNotEmpty()
  productId: number;
}
