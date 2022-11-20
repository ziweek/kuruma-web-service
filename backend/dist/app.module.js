"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const cars_module_1 = require("./cars/cars.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./users/entity/user.entity");
const car_entity_1 = require("./cars/entity/car.entity");
const sharing_entity_1 = require("./sharings/entity/sharing.entity");
const sharings_module_1 = require("./sharings/sharings.module");
const auth_module_1 = require("./auth/auth.module");
const events_module_1 = require("./events/events.module");
const user_authority_entity_1 = require("./auth/entity/user-authority.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [user_entity_1.User, car_entity_1.Car, sharing_entity_1.Sharing, user_authority_entity_1.UserAuthority],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            cars_module_1.CarsModule,
            sharings_module_1.SharingsModule,
            auth_module_1.AuthModule,
            events_module_1.EventsModule,
            events_module_1.EventsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map