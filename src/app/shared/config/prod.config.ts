export const PROD_CONFIG: any = {
  port: 4000,
  host: '127.0.0.1',
  isLog: false,
  isCors: true,
  corsWhiteList: ['https://frontend-1.web', 'https://frontend-2.web'],
  db: {
    mongo: {
      url: 'localhost',
      database: 'nestjs-starter-project',
    },
  },
}
