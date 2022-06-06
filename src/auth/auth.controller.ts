import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { LocalAuthGuard } from "./guard/auth.local.guard";
import { AuthLoginService } from "./service/auth.login.service";
import { AuthRegisterService } from "./service/auth.register.service";
import { AuthService } from "./service/auth.service";

@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private authLoginService: AuthLoginService,
        private authRegisterService: AuthRegisterService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Request() req) {
        return this.authLoginService.login(req.user);
    }
    @Post("register")
    async register(@Body() authRegisterDto: AuthRegisterDto) {
        return this.authRegisterService.register(
            authRegisterDto.email,
            authRegisterDto.password
        );
    }
}
