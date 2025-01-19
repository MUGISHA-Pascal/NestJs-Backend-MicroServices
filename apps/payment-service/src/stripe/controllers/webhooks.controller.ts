import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { StripeService } from '../stripe.service';
import { request } from 'express';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly stripeService: StripeService) {}
  @Post()
  async handleWebhook(@Req() req: Request, @Res() res: Response) {
    const sig = req.header['stripe-signature'];
    const payload = req.body;
    try {
      const event = this.stripeService.verifyWebhooks(payload, sig);
      res.send({ event });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  }
}
