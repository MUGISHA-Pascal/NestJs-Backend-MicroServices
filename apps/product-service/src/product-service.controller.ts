import { Controller, Get } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.input';
import { UpdateProductDto } from './dto/update-product.input';

@Controller()
export class ProductServiceController {
  constructor(private readonly productServiceService: ProductServiceService) {}

  @MessagePattern('getAllStocks')
  getAllProducts() {
    return this.productServiceService.getAllProducts();
  }
  @MessagePattern('getStock')
  getProduct(id: number) {
    return this.productServiceService.getProduct(id);
  }
  @MessagePattern('addStock')
  addProduct(createProductDto: CreateProductDto) {
    return this.productServiceService.addProduct(createProductDto);
  }
  @MessagePattern('deleteStock')
  removeProduct(id: number) {
    return this.productServiceService.removeProduct(id);
  }
  @MessagePattern('updateStock')
  updateProduct({
    id,
    updateProductDto,
  }: {
    id: number;
    updateProductDto: UpdateProductDto;
  }) {
    return this.productServiceService.updateProduct(id, updateProductDto);
  }
}
