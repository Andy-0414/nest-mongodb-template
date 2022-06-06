import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/service/user.service";
import { UserDocument } from "src/user/user.schema";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateLocalUser(
        email: string,
        password: string
    ): Promise<UserDocument | null> {
        const user = await this.usersService.findByEmail(email);

        if (!user) return null;

        if (user.password != password) return null;

        return user;
    }
}
