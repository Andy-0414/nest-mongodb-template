import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/service/user.service";
import { AuthLoginService } from "./auth.login.service";

@Injectable()
export class AuthRegisterService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        private authLoginService: AuthLoginService
    ) {}

    async register(email: string, password: string) {
        return this.authLoginService.login(
            await this.userService.createOne({ email, password })
        );
    }
}
