import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId } from "mongoose";
import { User, UserModel } from "./user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userSchema: UserModel) {}

    findAll() {
        return this.userSchema.find();
    }
    findOne(userObjectId: string) {
        if (!isValidObjectId(userObjectId)) return null;
        return this.userSchema.findById(userObjectId);
    }
}
