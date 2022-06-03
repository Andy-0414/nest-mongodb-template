import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";

@Schema()
export class User {
    @Prop()
    email: string;

    @Prop()
    password: string;
}

export type UserDocument = User & Document;
export type UserModel = User & Model<UserDocument>;
export const UserSchema = SchemaFactory.createForClass(User);
