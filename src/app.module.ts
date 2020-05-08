import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { Module1Module } from 'app/module/module1/module1.module'
import { Module2Module } from 'app/module/module2/module2.module'
import { Module1Middleware } from '@shared/middelware/module1.middleware'
import { Module1Controller } from 'app/module/module1/module1.controller'

@Module({
  imports: [Module1Module, Module2Module],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Module1Middleware).forRoutes(Module1Controller)
  }
}
