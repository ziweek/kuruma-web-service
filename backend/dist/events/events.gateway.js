"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
let createdRooms = [];
let EventsGateway = class EventsGateway {
    constructor() {
        this.logger = new common_1.Logger('Gateway');
    }
    onModuleInit() {
        this.nsp.on('connection', (socket) => {
            console.log(`connected - ${socket.id}`);
        });
    }
    afterInit() {
        this.nsp.adapter.on('delete-room', (room) => {
            const deletedRoom = createdRooms.find((createdRoom) => createdRoom === room);
            if (!deletedRoom)
                return;
            this.nsp.emit('delete-room', deletedRoom);
            createdRooms = createdRooms.filter((createdRoom) => createdRoom !== deletedRoom);
        });
        this.logger.log('웹소켓 서버 초기화 ✅');
    }
    handleConnection(socket) {
        this.logger.log(`${socket.id} 소켓 연결`);
    }
    handleDisconnect(socket) {
        this.logger.log(`${socket.id} 소켓 연결 해제`);
    }
    handleMessage(socket, { roomName, message }) {
        console.log('여기는 message');
        socket.to(roomName).emit('message', { username: socket.id, message });
        return { username: socket.id, message };
    }
    handleRoomList() {
        console.log(`room-list ${createdRooms}`);
        return createdRooms;
    }
    handleCreateRoom(socket, roomName) {
        const exists = createdRooms.find((createdRoom) => createdRoom === roomName);
        if (exists) {
            return { success: false, payload: `${roomName} 방이 이미 존재합니다.` };
        }
        socket.join(roomName);
        createdRooms.push(roomName);
        this.nsp.emit('create-room', roomName);
        console.log('여기는 create-room');
        console.log(roomName);
        console.log(createdRooms);
        console.log(this.nsp);
        return { success: true, payload: roomName };
    }
    handleJoinRoom(socket, roomName) {
        socket.join(roomName);
        socket.broadcast
            .to(roomName)
            .emit('message', { message: `${socket.id}가 들어왔습니다.` });
        console.log('여기는 join-room');
        console.log(roomName);
        console.log(socket.id);
        console.log(socket);
        return { success: true };
    }
    handleLeaveRoom(socket, roomName) {
        socket.leave(roomName);
        socket.broadcast
            .to(roomName)
            .emit('message', { message: `${socket.id}가 나갔습니다.` });
        return { success: true };
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], EventsGateway.prototype, "nsp", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('room-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleRoomList", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('create-room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleCreateRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('join-room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave-room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleLeaveRoom", null);
EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'chat' })
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map