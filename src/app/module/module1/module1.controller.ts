import { Controller, Get, Param, Post, Body, HttpStatus, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Module1Service } from './module1.service'
import { Module1Model } from '@shared/model/module1.model'
import { Module1Interceptor } from '@shared/interceptor/module1.interceptor'

@Controller('module1')
@ApiTags('module1')
@UseInterceptors(Module1Interceptor)
export class Module1Controller {
  constructor(private module1Service: Module1Service) {}

  @ApiOperation({ summary: 'Get method description' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The search result.',
  })
  @Get(':id')
  get(@Param('id') id: string) {
    return this.module1Service.find(id)
  }

  @ApiOperation({ summary: 'Post method description' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The update result.',
  })
  @Post()
  post(@Body() payload: Module1Model) {
    return this.module1Service.update(payload)
  }
}
