import { applyDecorators, createParamDecorator, CustomDecorator, ExecutionContext, SetMetadata, UseGuards } from "@nestjs/common";
import { UserDocument } from "src/user/user.schema";
import { JwtAuthGuard } from "./guard/auth.jwt.guard";
import { RolesGuard } from "./guard/auth.roles.guard";

export function Auth(...roles: string[]) {
    return applyDecorators(SetMetadata("roles", roles), UseGuards(JwtAuthGuard, RolesGuard));
}

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext): UserDocument => {
    return context.switchToHttp().getRequest().req.user as UserDocument;
});
