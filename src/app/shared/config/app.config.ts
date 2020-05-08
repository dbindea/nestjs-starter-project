import { DEV_CONFIG } from './dev.config'
import { PROD_CONFIG } from './prod.config'

const _env: string = process.env.ENVIRONMENT || 'dev'

const ENVIRONMENT: any = {
  isDevEnvironment: () => _env.toLowerCase() === 'dev',
  isProdEnvEnvironment: () => _env.toLowerCase() === 'prod',
}

let CONFIG: any
switch (_env.toLowerCase()) {
  case 'dev':
    CONFIG = DEV_CONFIG
    break
  case 'prod':
    CONFIG = PROD_CONFIG
    break
}

CONFIG.endpoint = `http://${CONFIG.host}:${CONFIG.port}/`

export const appConfig = () => {
  return {
    ...CONFIG,
    ...ENVIRONMENT,
  }
}
