import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { Module1Module } from 'app/module/module1/module1.module'
import { Module2Module } from 'app/module/module2/module2.module'

@Module({
  imports: [Module1Module, Module2Module],
  controllers: [AppController],
})
export class AppModule {}
