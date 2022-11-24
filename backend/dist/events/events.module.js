"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const events_gateway_1 = require("./events.gateway");
const events_service_1 = require("./events.service");
const events_controller_1 = require("./events.controller");
const event_entity_1 = require("./entity/event.entity");
const sharing_entity_1 = require("../sharings/entity/sharing.entity");
const user_entity_1 = require("../users/entity/user.entity");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, event_entity_1.Event, sharing_entity_1.Sharing])],
        exports: [typeorm_1.TypeOrmModule],
        providers: [events_gateway_1.EventsGateway, events_service_1.EventsService],
        controllers: [events_controller_1.EventsController],
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map