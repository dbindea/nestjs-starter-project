import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@Controller('module2')
@ApiTags('module2')
export class Module2Controller {}
