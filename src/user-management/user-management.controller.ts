import { Controller, Get } from '@nestjs/common';
import { UserManagementService } from './user-management.service';

@Controller('user-management')
export class UserManagementController {
	constructor(
		private readonly userManagementService: UserManagementService,
	) {}
	@Get()
	getHello(): string {
		return this.userManagementService.getHello();
	}
}
