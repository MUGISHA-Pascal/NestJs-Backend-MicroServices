import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class InventoryServiceService {
  constructor(private prisma: PrismaClient) {}
  addStock() {}
  getStock() {}
  getStocks() {}
  removeStock() {}
  updateStock() {}
}
