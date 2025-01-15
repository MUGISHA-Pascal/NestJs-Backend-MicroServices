import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateStockDto } from './dto/creare-stock.input';
import { UpdateStockDto } from './dto/update-stock.input';

@Injectable()
export class InventoryServiceService {
  constructor(private prisma: PrismaClient) {}
  addStock(createStockDto: CreateStockDto) {
    return this.prisma.stock.create({ data: createStockDto });
  }
  getStock(id: number) {
    return this.prisma.stock.findFirst({ where: { id } });
  }
  getStocks() {
    return this.prisma.stock.findMany();
  }
  removeStock(id: number) {
    return this.prisma.stock.delete({ where: { id } });
  }
  updateStock(id: number, updateStockDto: UpdateStockDto) {
    return this.prisma.stock.update({ where: { id }, data: updateStockDto });
  }
}
