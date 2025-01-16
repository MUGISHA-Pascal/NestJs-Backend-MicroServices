import { PartialType } from '@nestjs/swagger';
import { CreateOrderInput } from 'apps/order-service/src/orders/dto/create-order.input';

export class UpdateProductDto extends PartialType(CreateOrderInput) {}
