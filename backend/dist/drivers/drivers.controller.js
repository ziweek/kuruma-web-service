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
exports.DriversController = void 0;
const common_1 = require("@nestjs/common");
const CreateDriverDto_1 = require("./CreateDriverDto");
let DriversController = class DriversController {
    createDriver(createDriverDto) {
        return `this action returns ${createDriverDto.name.toString()}`;
    }
    readAllDriver() {
        return `this action returns all Drivers`;
    }
    readOneDriver(param) {
        return `this actiion returns ${param.id}`;
    }
    updateDriver(param, createDriverDto) {
        return `this action update ${param.id}`;
    }
    deleteDriver(param) {
        return `this action delete ${param.id}`;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDriverDto_1.CreateDriverDto]),
    __metadata("design:returntype", String)
], DriversController.prototype, "createDriver", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DriversController.prototype, "readAllDriver", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], DriversController.prototype, "readOneDriver", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateDriverDto_1.CreateDriverDto]),
    __metadata("design:returntype", String)
], DriversController.prototype, "updateDriver", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], DriversController.prototype, "deleteDriver", null);
DriversController = __decorate([
    (0, common_1.Controller)('drivers')
], DriversController);
exports.DriversController = DriversController;
//# sourceMappingURL=drivers.controller.js.map