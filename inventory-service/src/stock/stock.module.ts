import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockGateway } from './stock.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [StockGateway, StockService, PrismaService],
  imports: [PrismaModule],
})
export class StockModule {}
