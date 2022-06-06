import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";

@Schema()
export class User {
    @Prop({ unique: true, index: true })
    email: string;

    @Prop({ select: false })
    password: string;

    @Prop({ select: false })
    salt: string;
}

export type UserDocument = User & Document;
export type UserModel = User & Model<UserDocument>;
export const UserSchema = SchemaFactory.createForClass(User);
