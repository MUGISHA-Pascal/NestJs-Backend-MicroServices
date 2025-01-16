import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.input';
import { UpdateOrderDto } from './dto/update-order.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaClient) {}
  create(createOrderInput: CreateOrderDto) {
    return this.prisma.order.create({ data: createOrderInput });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findFirst({ where: { id } });
  }

  update(id: number, updateOrderInput: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data: updateOrderInput });
  }

  remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
