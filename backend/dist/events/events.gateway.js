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
    handleConnection(socket) {
        this.logger.log(`${socket.id} 소켓 연결`);
        socket.broadcast.emit('message', {
            message: `${socket.id}가 들어왔습니다.`,
        });
    }
    handleDisconnect(socket) {
        this.logger.log(`${socket.id} 소켓 연결 해제`);
    }
    handleMessage(socket, body) {
        socket.broadcast.emit('message', { username: socket.id, body: body });
        return { username: socket.id, body };
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
EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'chat' })
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map