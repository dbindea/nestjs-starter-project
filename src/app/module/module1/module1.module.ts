import { Module } from '@nestjs/common'
import { Module1Controller } from './module1.controller'
import { Module1Service } from './module1.service'

@Module({
  controllers: [Module1Controller],
  providers: [Module1Service],
})
export class Module1Module {}
