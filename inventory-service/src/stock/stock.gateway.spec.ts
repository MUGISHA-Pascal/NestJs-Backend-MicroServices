import { Test, TestingModule } from '@nestjs/testing';
import { StockGateway } from './stock.gateway';
import { StockService } from './stock.service';

describe('StockGateway', () => {
  let gateway: StockGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockGateway, StockService],
    }).compile();

    gateway = module.get<StockGateway>(StockGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
