import { ApiProperty } from '@nestjs/swagger'

export class User {
  _id?: string

  @ApiProperty()
  email: string

  @ApiProperty({ required: false })
  name?: string

  @ApiProperty({ required: false })
  password?: string
}
