import { PartialType } from '@nestjs/swagger';
import { CreateStockDto } from './creare-stock.input';

export class UpdateStockDto extends PartialType(CreateStockDto) {}
