import { Controller, HttpStatus, Get, Param, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Module2Service } from './module2.service'
import { Module2Model } from '@shared/model/module2.model'

@Controller('module2')
@ApiTags('module2')
export class Module2Controller {
  constructor(private module2Service: Module2Service) {}

  @ApiOperation({ summary: 'Find in mongo by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The search result.',
  })
  @Get(':id')
  get(@Param('id') id: string) {
    return this.module2Service.find(id)
  }

  @ApiOperation({ summary: 'Save to mongo' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The operation result.',
  })
  @Post()
  post(@Body() payload: Module2Model) {
    return this.module2Service.update(payload)
  }
}
