import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [OrdersResolver, OrdersService, PrismaClient],
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(
          process.cwd(),
          'apps',
          'order-service',
          'src',
          'generated',
          'graphql.ts',
        ),
      },
      sortSchema: true,
    }),
  ],
})
export class OrdersModule {}
