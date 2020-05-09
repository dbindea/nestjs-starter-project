import { Module } from '@nestjs/common'
import { AuthUserService } from './auth-user.service'
import { ServicesModule } from '@shared/services/services.module'
import { PassportModule } from '@nestjs/passport'
import { LocalUserStrategy } from './local-user.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './auth.constant'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    ServicesModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthUserService, LocalUserStrategy, LocalUserStrategy, JwtStrategy],
  exports: [AuthUserService],
})
export class AuthModule {}
