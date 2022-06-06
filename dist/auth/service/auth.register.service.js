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
exports.AuthRegisterService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../../user/service/user.service");
const auth_login_service_1 = require("./auth.login.service");
let AuthRegisterService = class AuthRegisterService {
    constructor(jwtService, userService, authLoginService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.authLoginService = authLoginService;
    }
    async register(email, password) {
        return this.authLoginService.login(await this.userService.createOne({ email, password }));
    }
};
AuthRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        auth_login_service_1.AuthLoginService])
], AuthRegisterService);
exports.AuthRegisterService = AuthRegisterService;
//# sourceMappingURL=auth.register.service.js.map