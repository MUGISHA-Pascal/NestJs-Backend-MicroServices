import { Controller, Get } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.input';
import { UpdateProductDto } from './dto/update-product.input';

@Controller()
export class ProductServiceController {
  constructor(private readonly productServiceService: ProductServiceService) {}

  @MessagePattern('getAllProducts')
  getAllProducts() {
    return this.productServiceService.getAllProducts();
  }
  @MessagePattern('getProduct')
  getProduct(id: number) {
    return this.productServiceService.getProduct(id);
  }
  @MessagePattern('addProduct')
  addProduct(createProductDto: CreateProductDto) {
    return this.productServiceService.addProduct(createProductDto);
  }
  @MessagePattern('deleteProduct')
  removeProduct(id: number) {
    return this.productServiceService.removeProduct(id);
  }
  @MessagePattern('updateProduct')
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
