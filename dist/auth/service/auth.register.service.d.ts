import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/service/user.service";
import { AuthLoginService } from "./auth.login.service";
export declare class AuthRegisterService {
    private jwtService;
    private userService;
    private authLoginService;
    constructor(jwtService: JwtService, userService: UserService, authLoginService: AuthLoginService);
    register(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
