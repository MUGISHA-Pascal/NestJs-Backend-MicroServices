import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StripeService } from '../stripe.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly stripeService: StripeService) {}
  @Post('create-customer')
  async createCustomer(
    @Body() { email, name }: { email: string; name: string },
  ) {
    return this.stripeService.createCustomer(email, name);
  }
  @Post('create-payment-intent')
  async createPaymentIntent(
    @Body()
    {
      amount,
      currency,
      customerId,
    }: {
      amount: number;
      currency: string;
      customerId: string;
    },
  ) {
    return this.stripeService.createPaymentIntent(amount, currency, customerId);
  }
}
