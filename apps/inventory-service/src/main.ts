import { NestFactory, Reflector } from '@nestjs/core';
import { InventoryServiceModule } from './inventory-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    InventoryServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: Number(process.env.INVENTORY_SERVICE_PORT),
      },
    },
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen();
}
bootstrap();
