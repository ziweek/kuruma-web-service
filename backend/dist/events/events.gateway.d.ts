import { OnModuleInit } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
interface MessagePayload {
    roomName: string;
    message: string;
}
export declare class EventsGateway implements OnModuleInit, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger;
    nsp: Namespace;
    onModuleInit(): void;
    afterInit(): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    handleMessage(socket: Socket, { roomName, message }: MessagePayload): {
        username: string;
        message: string;
    };
    handleRoomList(): string[];
    handleCreateRoom(socket: Socket, roomName: string): {
        success: boolean;
        payload: string;
    };
    handleJoinRoom(socket: Socket, roomName: string): {
        success: boolean;
    };
    handleLeaveRoom(socket: Socket, roomName: string): {
        success: boolean;
    };
}
export {};
