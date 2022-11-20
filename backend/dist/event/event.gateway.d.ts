import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';
export declare class EventGateway implements OnModuleInit {
    server: Server;
    onModuleInit(): void;
    handleMessage(client: any, payload: any, body: any): void;
}
