import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { AUTH } from "./auth.constant";
import { AuthService } from "./service/auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategy/local.strategy";
import { AuthLoginService } from "./service/auth.login.service";
import { AuthRegisterService } from "./service/auth.register.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        JwtModule.register({
            secret: AUTH.JWT_SECRET,
            signOptions: { expiresIn: "60s" },
        }),
        PassportModule,
        UserModule,
    ],
    providers: [
        AuthService,
        AuthLoginService,
        AuthRegisterService,
        LocalStrategy,
        JwtStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
