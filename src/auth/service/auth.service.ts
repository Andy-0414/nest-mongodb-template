import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/service/user.service";
import { UserDocument } from "src/user/user.schema";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateLocalUser(
        email: string,
        password: string
    ): Promise<UserDocument | null> {
        const user = await this.usersService.findByEmail(email);

        if (!user) return null;

        if (!(await bcrypt.compare(password, user.password))) return null;

        return user;
    }
}
