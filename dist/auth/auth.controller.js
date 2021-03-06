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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_register_dto_1 = require("./dto/auth.register.dto");
const auth_jwt_guard_1 = require("./guard/auth.jwt.guard");
const auth_local_guard_1 = require("./guard/auth.local.guard");
const auth_login_service_1 = require("./service/auth.login.service");
const auth_register_service_1 = require("./service/auth.register.service");
const auth_service_1 = require("./service/auth.service");
let AuthController = class AuthController {
    constructor(authService, authLoginService, authRegisterService) {
        this.authService = authService;
        this.authLoginService = authLoginService;
        this.authRegisterService = authRegisterService;
    }
    async login(req) {
        return this.authLoginService.login(req.user);
    }
    async register(authRegisterDto) {
        return this.authRegisterService.register(authRegisterDto.email, authRegisterDto.password);
    }
    async profile(req) {
        return req.user;
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_local_guard_1.LocalAuthGuard),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_register_dto_1.AuthRegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(auth_jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)("profile"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "profile", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        auth_login_service_1.AuthLoginService,
        auth_register_service_1.AuthRegisterService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map