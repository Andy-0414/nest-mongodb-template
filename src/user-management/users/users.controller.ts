import { Controller, Get } from '@nestjs/common';

@Controller('user-management/users')
export class UsersController {
	@Get()
	helloWorld() {
		return 'helloWorld';
	}
}
