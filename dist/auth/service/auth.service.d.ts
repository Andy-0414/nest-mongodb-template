import { UserService } from "src/user/service/user.service";
import { UserDocument } from "src/user/user.schema";
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    validateLocalUser(email: string, password: string): Promise<UserDocument | null>;
}
