import { Module } from '@nestjs/common'
import { Module2Service } from './module2.service'
import { Module2Controller } from './module2.controller'
import { ServicesModule } from '@shared/services/services.module'

@Module({
  imports: [ServicesModule],
  providers: [Module2Service],
  controllers: [Module2Controller],
})
export class Module2Module {}
