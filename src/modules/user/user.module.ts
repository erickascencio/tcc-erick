import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers.controller';
import { ServicesService } from './services/services.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [ControllersController, UserController],
  providers: [ServicesService, UserService]
})
export class UserModule {}
