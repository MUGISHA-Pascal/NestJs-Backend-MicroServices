import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [StockModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
