import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import * as dotenv from 'dotenv';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
dotenv.config();
async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   UserServiceModule,
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       host: 'localhost',
  //       port: Number(process.env.USER_SERVICE_PORT),
  //     },
  //   },
  // );
  const app = await NestFactory.create(AuthModule);
  await app.listen(process.env.USER_SERVICE_PORT);
}
bootstrap();
