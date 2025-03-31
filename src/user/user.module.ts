import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Ensure UserService is available to other modules
})
export class UserModule {}
