import { AuthLoginService } from "./service/auth.login.service";
import { AuthService } from "./service/auth.service";
export declare class AuthController {
    private authService;
    private authLoginService;
    constructor(authService: AuthService, authLoginService: AuthLoginService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
}
