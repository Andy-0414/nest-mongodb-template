import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/service/user.service";
import { AuthLoginService } from "./auth.login.service";
import * as bcrypt from "bcrypt";
import { UserDocument } from "src/user/user.schema";

@Injectable()
export class AuthRegisterService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        private authLoginService: AuthLoginService
    ) {}

    async register(email: string, password: string) {
        const passwordHash = await bcrypt.hash(password, 10);
        try {
            const user: UserDocument | null = await this.userService.createOne({
                email,
                password: passwordHash,
            });

            if (!user) throw null;

            return this.authLoginService.login(user);
        } catch (err) {
            throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
        }
    }
}
