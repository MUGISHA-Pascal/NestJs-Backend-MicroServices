import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { CreateStockDto } from 'apps/inventory-service/src/dto/creare-stock.input';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('INVENTORY_SERVICE') private inventoryClient: ClientProxy,
  ) {}

  @Post('add_stock')
  addStock(@Body() createStockDto: CreateStockDto) {
    return this.inventoryClient.send({ cmd: 'addStock' }, createStockDto);
  }
}
