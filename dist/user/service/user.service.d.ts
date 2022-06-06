import { UserCreateDto } from "../dto/user.create.dto";
import { UserDocument, UserModel } from "../user.schema";
export declare class UserService {
    private userSchema;
    constructor(userSchema: UserModel);
    findAll(): Promise<UserDocument[]>;
    findOne(userObjectId: string): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument>;
    createOne(userDto: UserCreateDto): Promise<UserDocument | null>;
}
