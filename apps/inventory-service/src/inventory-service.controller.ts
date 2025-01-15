import { Controller, Get } from '@nestjs/common';
import { InventoryServiceService } from './inventory-service.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateStockDto } from './dto/creare-stock.input';

@Controller()
export class InventoryServiceController {
  constructor(
    private readonly inventoryServiceService: InventoryServiceService,
  ) {}

  @MessagePattern()
  getAllStocks() {
    return this.inventoryServiceService.getStocks();
  }
  @MessagePattern()
  getStock() {
    return this.inventoryServiceService.getStock();
  }
  @MessagePattern({ cmd: 'addStock' })
  addStock(createStockDto: CreateStockDto) {
    return this.inventoryServiceService.addStock(createStockDto);
  }
  @MessagePattern()
  removeStock() {
    return this.inventoryServiceService.removeStock();
  }
  @MessagePattern()
  updateStock() {
    return this.inventoryServiceService.updateStock();
  }
}
