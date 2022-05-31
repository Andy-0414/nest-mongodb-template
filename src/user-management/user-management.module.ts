import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { UserManagementController } from './user-management.controller';

@Module({
  providers: [UserManagementService],
  controllers: [UserManagementController],
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
