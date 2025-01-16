import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.input';
import { UpdateProductDto } from './dto/update-product.input';

@Injectable()
export class ProductServiceService {
  constructor(private prisma: PrismaClient) {}
  addProduct(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }
  getProduct(id: number) {
    return this.prisma.product.findFirst({ where: { id } });
  }
  getAllProducts() {
    return this.prisma.product.findMany();
  }
  removeProduct(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }
}
