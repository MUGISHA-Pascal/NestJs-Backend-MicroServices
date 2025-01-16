import { CreateOrderDto } from './create-order.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  id: number;
}
