import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user-management.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Module({
	providers: [UserManagementService, UsersService],
	controllers: [UserManagementController, UsersController],
	imports: [],
})
export class UserManagementModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply((req, res, next) => {
				console.log('middleware');
				next();
			})
			.forRoutes(UserManagementController);
	}
}
