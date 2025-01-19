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
import { AppService } from '../app.service';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateStockDto } from 'apps/inventory-service/src/dto/update-stock.input';
import { CreateProductDto } from 'apps/product-service/src/dto/create-product.input';
import { UpdateProductDto } from 'apps/product-service/src/dto/update-product.input';

@Controller('product')
export class ProductController {
  constructor(@Inject('PRODUCT_SERVICE') private productClient: ClientProxy) {}

  @Post('add')
  addStock(@Body() createProductDto: CreateProductDto) {
    return this.productClient.send('addProduct', createProductDto);
  }
  @Get('get/:id')
  getStock(@Param('id', ParseIntPipe) id: number) {
    return this.productClient.send('getProduct', id);
  }
  @Get('all')
  getAllStock() {
    return this.productClient.send('getAllProducts', {});
  }
  @Put('update/:id')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productClient.send('deleteProduct', { id, updateProductDto });
  }
  @Delete('delete/:id')
  deleteStock(@Param('id', ParseIntPipe) id: number) {
    return this.productClient.send('updateProduct', id);
  }
}
