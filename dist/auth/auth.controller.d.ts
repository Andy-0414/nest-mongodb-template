import { AuthRegisterDto } from "./dto/auth.register.dto";
import { AuthLoginService } from "./service/auth.login.service";
import { AuthRegisterService } from "./service/auth.register.service";
import { AuthService } from "./service/auth.service";
export declare class AuthController {
    private authService;
    private authLoginService;
    private authRegisterService;
    constructor(authService: AuthService, authLoginService: AuthLoginService, authRegisterService: AuthRegisterService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
    register(authRegisterDto: AuthRegisterDto): Promise<{
        accessToken: string;
    }>;
    profile(req: any): Promise<any>;
}
