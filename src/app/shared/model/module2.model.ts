import { ApiProperty } from '@nestjs/swagger'

export class Module2Model {
  @ApiProperty()
  id: string

  @ApiProperty({ required: false })
  description: string
}
