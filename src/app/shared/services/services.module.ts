import { Module, HttpModule } from '@nestjs/common'
import { Module2MongoService } from './index.services'
import { MongooseModule } from '@nestjs/mongoose'
import { Module2Schema } from '@shared/schema/module2.schema'
import { UserService } from './user/user.service'
import { UserSchema } from '@shared/schema/user.schema'
import { SchedulerService } from './scheduler/scheduler.service'

const sharedServices: any[] = [Module2MongoService, UserService]

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'Module2Collection', schema: Module2Schema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  providers: [...sharedServices, SchedulerService],
  exports: [...sharedServices],
})
export class ServicesModule {}
