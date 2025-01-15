import { Controller, Get } from '@nestjs/common';
import { InventoryServiceService } from './inventory-service.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateStockDto } from './dto/creare-stock.input';
import { UpdateStockDto } from './dto/update-stock.input';

@Controller()
export class InventoryServiceController {
  constructor(
    private readonly inventoryServiceService: InventoryServiceService,
  ) {}

  @MessagePattern({ cmd: 'getAllStocks' })
  getAllStocks() {
    return this.inventoryServiceService.getStocks();
  }
  @MessagePattern({ cmd: 'getStock' })
  getStock(id: number) {
    return this.inventoryServiceService.getStock(id);
  }
  @MessagePattern({ cmd: 'addStock' })
  addStock(createStockDto: CreateStockDto) {
    return this.inventoryServiceService.addStock(createStockDto);
  }
  @MessagePattern({ cmd: 'deleteStock' })
  removeStock(id: number) {
    return this.inventoryServiceService.removeStock(id);
  }
  @MessagePattern({ cmd: 'updateStock' })
  updateStock({
    id,
    updateStockDto,
  }: {
    id: number;
    updateStockDto: UpdateStockDto;
  }) {
    return this.inventoryServiceService.updateStock(id, updateStockDto);
  }
}
