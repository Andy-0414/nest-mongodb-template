import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId } from "mongoose";
import { UserCreateDto } from "../dto/user.create.dto";
import { User, UserDocument, UserModel } from "../user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userSchema: UserModel) {}

    async findAll(): Promise<UserDocument[]> {
        return this.userSchema.find<UserDocument>();
    }

    async findOne(userObjectId: string): Promise<UserDocument> {
        if (!isValidObjectId(userObjectId)) return null;
        return this.userSchema.findById<UserDocument>(userObjectId);
    }

    async findByEmail(email: string): Promise<UserDocument> {
        return this.userSchema.findOne<UserDocument>({ email }, "+password");
    }

    async createOne(userDto: UserCreateDto): Promise<UserDocument | null> {
        try {
            const user = await new this.userSchema(userDto).save();
            return user;
        } catch (err) {
            return null;
        }
    }
}
