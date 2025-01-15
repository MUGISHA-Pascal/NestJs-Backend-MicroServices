import { Module } from '@nestjs/common';
import { InventoryServiceController } from './inventory-service.controller';
import { InventoryServiceService } from './inventory-service.service';
import { PrismaModule } from 'prisma';
import { PrismaClient } from '@prisma/client';
@Module({
  imports: [],
  controllers: [InventoryServiceController],
  providers: [InventoryServiceService, PrismaClient],
})
export class InventoryServiceModule {}
