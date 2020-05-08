import { Module, HttpModule } from '@nestjs/common'
import { Module2MongoService } from './index.services'
import { MongooseModule, InjectModel } from '@nestjs/mongoose'
import { Module2Schema } from '@shared/schema/module2.schema'

const sharedServices: any[] = [Module2MongoService]

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: 'Module2Collection', schema: Module2Schema }])],
  providers: [...sharedServices],
  exports: [...sharedServices],
})
export class ServicesModule {}
