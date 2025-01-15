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

@Controller('stock')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('INVENTORY_SERVICE') private inventoryClient: ClientProxy,
  ) {}

  @Post('add')
  addStock(@Body() createStockDto: CreateStockDto) {
    return this.inventoryClient.send('addStock', createStockDto);
  }
  @Get('get/:id')
  getStock(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryClient.send('getStock', id);
  }
  @Get('all')
  getAllStock() {
    return this.inventoryClient.send('getAllStocks', {});
  }
  @Put('update/:id')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return this.inventoryClient.send('updateStock', { id, updateStockDto });
  }
  @Delete('delete/:id')
  deleteStock(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryClient.send('deleteStock', id);
  }
}
