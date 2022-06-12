import { Strategy } from "passport-jwt";
import { AuthJwtDto } from "../dto/auth.jwt.dto";
import { UserService } from "src/user/service/user.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: AuthJwtDto): Promise<import("../../user/user.schema").UserDocument>;
}
export {};
