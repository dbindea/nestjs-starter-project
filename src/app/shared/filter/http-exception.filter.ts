import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common'
import { HttpException, InternalServerErrorException } from '@nestjs/common'
import { appConfig } from '@shared/config/app.config'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const { status, json } = this.prepareException(exception)

    if (appConfig().isLog) {
      console.error(JSON.stringify(json))
    }

    response.status(status).send(json)
  }

  prepareException(exc: any): { status: number; json: object } {
    const error = exc instanceof HttpException ? exc : new InternalServerErrorException(exc.message)
    const status = error.getStatus()
    const response = error.getResponse()
    const json = typeof response === 'string' ? { error: response } : response
    return { status, json }
  }
}
