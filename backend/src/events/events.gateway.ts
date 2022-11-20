import { Body, OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: 'chat' })
export class EventsGateway
  implements
    OnModuleInit,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
{
  private logger = new Logger('Gateway');

  @WebSocketServer()
  nsp: Namespace;

  onModuleInit() {
    this.nsp.on('connection', (socket) => {
      console.log(`connected - ${socket.id}`);
    });
  }

  afterInit() {
    this.nsp.adapter.on('create-room', (room) => {
      this.logger.log(`Room:${room}이 생성되었습니다.`);
    });

    this.nsp.adapter.on('join-room', (room, id) => {
      this.logger.log(`Socket:${id}님이 "Room:${room}"에 참여하였습니다.`);
    });

    this.nsp.adapter.on('leave-room', (room, id) => {
      this.logger.log(`Socket:${id}님이 "Room${room}"에서 나가셨습니다.`);
    });

    this.nsp.adapter.on('delete-room', (room, id) => {
      this.logger.log(`Socket:${id}님이 "Room${room}"에서 나가셨습니다.`);
    });

    this.logger.log('웹소켓 서버 초기화');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id} 소켓 연결`);

    socket.broadcast.emit('message', {
      message: `${socket.id}가 들어왔습니다.`,
    });
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id} 소켓 연결 해제`);
  }

  @SubscribeMessage('message')
  handleMessage(@ConnectedSocket() socket: Socket, @MessageBody() body: any) {
    socket.broadcast.emit('message', { username: socket.id, body: body });
    return { username: socket.id, body };
  }
}
