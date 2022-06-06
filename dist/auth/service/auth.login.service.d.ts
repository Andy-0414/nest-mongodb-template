import { JwtService } from "@nestjs/jwt";
import { UserDocument } from "src/user/user.schema";
export declare class AuthLoginService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(user: UserDocument): Promise<{
        accessToken: string;
    }>;
}
