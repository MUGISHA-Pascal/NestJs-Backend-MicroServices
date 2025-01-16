import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.input';
import { UpdateOrderDto } from './dto/update-order.input';

@Resolver('Order')
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation('createOrder')
  create(@Args('createOrderInput') createOrderInput: CreateOrderDto) {
    return this.ordersService.create(createOrderInput);
  }

  @Query('getAllOrders')
  findAll() {
    return this.ordersService.findAll();
  }

  @Query('getOrder')
  findOne(@Args('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation('updateOrder')
  update(@Args('updateOrderInput') updateOrderInput: UpdateOrderDto) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation('removeOrder')
  remove(@Args('id') id: number) {
    return this.ordersService.remove(id);
  }
}
