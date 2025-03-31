import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    UserModule, // Import UserModule so AuthService can access UserService
    JwtModule.register({
      secret: 'secretKey', // Replace this with an environment variable in production
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService], // Export AuthService for other modules if needed
})
export class AuthModule {}
