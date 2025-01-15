import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { CreateStockDto } from 'apps/inventory-service/src/dto/creare-stock.input';
import { UpdateStockDto } from 'apps/inventory-service/src/dto/update-stock.input';

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
  @Get('get_Stock')
  getStock(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryClient.send({ cmd: 'getStock' }, id);
  }
  @Get('get_all_Stock')
  getAllStock(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryClient.send({ cmd: 'getAllStocks' }, id);
  }
  @Put('update_Stock')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return this.inventoryClient.send(
      { cmd: 'updateStock' },
      { id, updateStockDto },
    );
  }
  @Delete('delete_Stock')
  deleteStock(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryClient.send({ cmd: 'deleteStock' }, id);
  }
}
