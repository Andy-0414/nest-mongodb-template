import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthRegisterService {
    constructor(private jwtService: JwtService) {}
}
