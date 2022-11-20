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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketClient = void 0;
const common_1 = require("@nestjs/common");
const socket_io_client_1 = require("socket.io-client");
let SocketClient = class SocketClient {
    constructor() {
        this.socketClient = (0, socket_io_client_1.io)('http://localhost:3000');
    }
    onModuleInit() {
        this.registerConsumerEvents();
    }
    registerConsumerEvents() {
        this.socketClient.on('connect', () => {
            console.log('Connected to Gateway');
        });
        this.socketClient.on('onMessage', (payload) => {
            console.log('socketClinet');
            console.log(payload);
        });
    }
};
SocketClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SocketClient);
exports.SocketClient = SocketClient;
//# sourceMappingURL=socket-client.js.map