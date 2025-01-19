import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { PaymentController } from './controllers/payments.controller';
import { WebhookController } from './controllers/webhooks.controller';

@Module({
  controllers: [PaymentController, WebhookController],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}
