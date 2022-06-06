import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDocument } from "src/user/user.schema";

@Injectable()
export class AuthLoginService {
    constructor(private jwtService: JwtService) {}

    async login(user: UserDocument) {
        const payload = { email: user.email, sub: user._id };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
