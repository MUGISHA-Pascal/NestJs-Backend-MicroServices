import { Module } from '@nestjs/common';
import { ProductServiceController } from './product-service.controller';
import { ProductServiceService } from './product-service.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [ProductServiceController],
  providers: [ProductServiceService, PrismaClient],
})
export class ProductServiceModule {}
