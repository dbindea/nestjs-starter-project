import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as rateLimit from 'express-rate-limit'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { appConfig } from '@shared/config/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(helmet())
  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  app.use(compression())
  app.use(
    rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  )

  await app.listen(appConfig().port)
  console.log(`URL (${process.env.ENVIRONMENT})`, appConfig().endpoint)
}
bootstrap()
