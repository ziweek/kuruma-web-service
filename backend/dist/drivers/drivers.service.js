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
exports.DriversService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const driver_entity_1 = require("./entity/driver.entity");
let DriversService = class DriversService {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async findDriverAll() {
        return this.driverRepository.find();
    }
    async findDriverOne(id) {
        return this.driverRepository.findOneBy({ id });
    }
    async createDriver(driver) {
        await this.driverRepository.save(driver);
    }
    async deleteDriver(driver) {
        await this.driverRepository.delete(driver);
    }
    async updateDriver(id, driver) {
        const targetDriver = await this.driverRepository.findOneBy({ id });
        if (targetDriver) {
            await this.driverRepository.update(id, {
                name: driver.name,
                phone: driver.phone,
                email: driver.email,
                password: driver.password,
            });
        }
    }
};
DriversService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entity_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DriversService);
exports.DriversService = DriversService;
//# sourceMappingURL=drivers.service.js.map