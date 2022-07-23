import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";

@Schema()
export class User {
    @Prop({ default: "", required: true, unique: true, index: true })
    email: string;

    @Prop({ default: "", select: false })
    password: string;

    @Prop({ default: "", select: false })
    salt: string;

    @Prop({ default: [] })
    roles: string[];
}

export type UserDocument = User & Document;
export type UserModel = User & Model<UserDocument>;
export const UserSchema = SchemaFactory.createForClass(User);
