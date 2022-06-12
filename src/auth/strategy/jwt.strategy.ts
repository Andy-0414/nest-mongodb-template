import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { AUTH } from "../auth.constant";
import { AuthJwtDto } from "../dto/auth.jwt.dto";
import { UserService } from "src/user/service/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: AUTH.JWT_SECRET,
        });
    }

    async validate(payload: AuthJwtDto) {
        const user = this.userService.findOne(payload.sub);
        if (!user) throw new UnauthorizedException();

        return user;
    }
}
