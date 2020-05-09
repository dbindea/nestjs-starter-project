import { Controller, Post, Body, UseGuards, Get, Param, Query } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { UserService } from '@shared/services/index.services'
import { AuthUserService } from '@shared/auth/auth-user.service'
import { User } from '@shared/model/user.model'
import { JwtAuthGuard } from '@shared/auth/jwt-auth.guard'
import { LocalAuthGuard } from '@shared/auth/local-auth.guard'

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService, private authUserService: AuthUserService) {}

  @ApiOperation({ summary: 'Create user' })
  @Post()
  async createUser(@Body() user: User) {
    return await this.userService.create(user)
  }

  @ApiOperation({ summary: 'Find user by id' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findUser(@Param('id') id: string) {
    return await this.userService.find(id)
  }

  @ApiOperation({ summary: 'Find user by email' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findUserByEmail(@Query('email') email: string) {
    return await this.userService.findByEmail(email)
  }

  @ApiOperation({ summary: 'login' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: User) {
    return this.authUserService.login(user)
  }
}
