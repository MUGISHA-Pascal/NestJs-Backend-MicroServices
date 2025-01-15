import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateStockDto } from './dto/creare-stock.input';

@Injectable()
export class InventoryServiceService {
  constructor(private prisma: PrismaClient) {}
  addStock(createStockDto: CreateStockDto) {
    return this.prisma.stock.create({ data: createStockDto });
  }
  getStock() {}
  getStocks() {}
  removeStock() {}
  updateStock() {}
}
