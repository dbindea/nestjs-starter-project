import { ApiProperty } from '@nestjs/swagger'

export class Module1Model {
  @ApiProperty()
  id: string

  @ApiProperty({ required: false })
  description: string
}
