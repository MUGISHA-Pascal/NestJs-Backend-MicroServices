import { Module } from '@nestjs/common';
import { StockController } from './controllers/stock.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { ProductController } from './controllers/product.controller';

dotenv.config();
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: Number(process.env.INVENTORY_SERVICE_PORT),
        },
      },
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: Number(process.env.PRODUCT_SERVICE_PORT),
        },
      },
    ]),
  ],
  controllers: [StockController, ProductController],
  providers: [AppService],
})
export class AppModule {}
