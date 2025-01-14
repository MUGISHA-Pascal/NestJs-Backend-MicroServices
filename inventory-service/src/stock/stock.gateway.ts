import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@WebSocketGateway()
export class StockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly stockService: StockService) {}
  @WebSocketServer()
  server: Server;
  handleConnection(client: Socket) {
    console.log(`client connected ${client.id}`);
    client.emit('connected', { message: 'you are connected' });
  }
  handleDisconnect(client: any) {
    console.log(`client disconnected ${client.id}`);
    client.emit('disconnected', { message: 'you are disconnected' });
  }
  @SubscribeMessage('createStock')
  create(@MessageBody() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @SubscribeMessage('findAllStock')
  findAll() {
    return this.stockService.findAll();
  }

  @SubscribeMessage('findOneStock')
  findOne(@MessageBody() id: number) {
    return this.stockService.findOne(id);
  }

  @SubscribeMessage('updateStock')
  update(@MessageBody() updateStockDto: UpdateStockDto) {
    return this.stockService.update(updateStockDto.id, updateStockDto);
  }

  @SubscribeMessage('removeStock')
  remove(@MessageBody() id: number) {
    return this.stockService.remove(id);
  }
}
