"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const events_module_1 = require("../events/events.module");
const user_entity_1 = require("../users/entity/user.entity");
const sharing_entity_1 = require("./entity/sharing.entity");
const sharings_controller_1 = require("./sharings.controller");
const sharings_service_1 = require("./sharings.service");
let SharingsModule = class SharingsModule {
};
SharingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, sharing_entity_1.Sharing]), events_module_1.EventsModule],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [sharings_controller_1.SharingsController],
        providers: [sharings_service_1.SharingsService],
    })
], SharingsModule);
exports.SharingsModule = SharingsModule;
//# sourceMappingURL=sharings.module.js.map