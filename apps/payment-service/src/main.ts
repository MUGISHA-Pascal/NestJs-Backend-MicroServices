import { NestFactory } from '@nestjs/core';
import { StripeModule } from './stripe/stripe.module';
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(StripeModule);
  await app.listen(process.env.PAYEMENT_SERVICE_PORT);
}
bootstrap();
