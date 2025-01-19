import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class StripeService {
  private stripe: Stripe;
  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2024-12-18.acacia',
    });
  }
  async createCustomer(email: string, name: string): Promise<Stripe.Customer> {
    return this.stripe.customers.create({
      email,
      name,
    });
  }
  async createPaymentIntent(
    amount: number,
    currency: string,
    customerId: string,
  ): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
      customer: customerId,
    });
  }
  async verifyWebhooks(payload: Buffer, signature: string): Promise<any> {
    try {
      return await this.stripe.webhooks.constructEvent(
        payload,
        signature,
        process.env.WEBHOOK_SECRET_KEY,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
