import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth/auth.service'; // Adjust the import path as necessary

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey', // You should use a more secure and dynamic method to store the secret key
    });
  }

  validate(payload: any) {
    // Here, the payload can be the user data decoded from the JWT
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
