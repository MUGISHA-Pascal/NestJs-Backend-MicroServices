import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from 'apps/order-service/src/orders/dto/create-order.input';

export class UpdateProductDto extends PartialType(CreateOrderDto) {}
