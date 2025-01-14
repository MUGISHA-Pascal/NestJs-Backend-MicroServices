import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
