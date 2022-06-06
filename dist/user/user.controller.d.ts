import { UserService } from "./service/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./user.schema").UserDocument[]>;
    findOne(_id: string): Promise<import("./user.schema").UserDocument>;
}
