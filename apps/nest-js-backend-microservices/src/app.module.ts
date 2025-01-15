import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
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
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
