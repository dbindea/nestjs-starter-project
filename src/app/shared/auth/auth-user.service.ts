import { Injectable } from '@nestjs/common'
import { UserService } from '@shared/services/index.services'
import { User } from '@shared/model/user.model'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthUserService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: User = await this.userService.findByEmail(email, true)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: User) {
    user = await this.userService.findByEmail(user.email)
    user.password = undefined
    const payload = { email: user.email, sub: user._id }
    return {
      user,
      access_token: this.jwtService.sign(payload),
    }
  }
}
