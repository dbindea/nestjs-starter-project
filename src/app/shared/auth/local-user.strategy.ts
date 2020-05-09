import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthUserService } from './auth-user.service'

@Injectable()
export class LocalUserStrategy extends PassportStrategy(Strategy) {
  constructor(private authUserService: AuthUserService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authUserService.validateUser(email, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
