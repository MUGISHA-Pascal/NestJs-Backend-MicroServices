import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { OrdersModule } from './orders/orders.module';
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  await app.listen(process.env.ORDER_SERVICE_PORT);
}
bootstrap();
