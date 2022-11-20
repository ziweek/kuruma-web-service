import { OnModuleInit } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
export declare class EventsGateway implements OnModuleInit, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger;
    nsp: Namespace;
    onModuleInit(): void;
    afterInit(): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    handleMessage(socket: Socket, body: any): {
        username: string;
        body: any;
    };
}
