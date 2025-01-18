import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClient } from '@prisma/client';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import * as dotenv from 'dotenv';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY as string,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaClient, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
