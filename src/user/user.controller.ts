import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(@Param("_id") _id: string) {
        return this.userService.findAll();
    }

    @Get(":_id")
    findOne(@Param("_id") _id: string) {
        return this.userService.findOne(_id);
    }
}
