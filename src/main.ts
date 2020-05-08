import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as rateLimit from 'express-rate-limit'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { appConfig } from '@shared/config/app.config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { Module1Module } from 'app/module/module1/module1.module'
import { Module2Module } from 'app/module/module2/module2.module'
import { HttpException, HttpStatus } from '@nestjs/common'
import { HttpExceptionFilter } from '@shared/filter/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // SERVER CONFIG
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

  // GLOBAL EXCEPTION INTERCEPTOR
  app.useGlobalFilters(new HttpExceptionFilter())

  // GLOBAL PREFIX
  app.setGlobalPrefix(`/api/${appConfig().apiVersion}`)

  // SWAGGER CONFIG
  if (appConfig().isDevEnvironment()) {
    const documentBuilder = new DocumentBuilder()
      .setTitle('API')
      .setDescription('API Description')
      .setVersion(appConfig().apiVersion)
      .build()
    const document = SwaggerModule.createDocument(app, documentBuilder, {
      include: [Module1Module, Module2Module],
    })
    SwaggerModule.setup('doc', app, document)
  }

  // CORS
  const corsOptions: any = {
    origin: (origin, callback) => {
      if (appConfig().corsWhiteList.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new HttpException('Not allowed by CORS', HttpStatus.UNAUTHORIZED))
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }

  if (appConfig().isCors) {
    app.enableCors(corsOptions)
  } else {
    app.enableCors()
  }

  await app.listen(appConfig().port)
  console.log(`URL (${process.env.ENVIRONMENT})`, appConfig().endpoint)
}
bootstrap()
