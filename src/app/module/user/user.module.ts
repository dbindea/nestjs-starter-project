import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { AuthModule } from '@shared/auth/auth.module'
import { ServicesModule } from '@shared/services/services.module'

@Module({
  imports: [ServicesModule, AuthModule],
  controllers: [UserController],
})
export class UserModule {}
