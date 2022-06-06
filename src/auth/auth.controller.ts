import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./guard/auth.local.guard";
import { AuthLoginService } from "./service/auth.login.service";
import { AuthService } from "./service/auth.service";

@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private authLoginService: AuthLoginService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Request() req) {
        return this.authLoginService.login(req.user);
    }
}
