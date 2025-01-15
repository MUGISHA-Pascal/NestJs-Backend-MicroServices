import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderInput {
  @IsNumber()
  @IsNotEmpty()
  userId: number;
  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
  @IsString()
  @IsNotEmpty()
  status: String;
}
