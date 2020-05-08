import { Controller, Get, Res, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

@Controller()
export class AppController {
  @Get('/favicon.ico')
  getFavicon(@Res() res: Response) {
    res.status(HttpStatus.NO_CONTENT).send()
  }
}
