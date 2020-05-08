import { Injectable, NestMiddleware } from '@nestjs/common'

@Injectable()
export class Module1Middleware implements NestMiddleware {
  constructor() {}

  use(req: Request, res: Response, next: Function) {
    console.log('Module1Middelvare interceptor... OK')
    next()
  }
}
