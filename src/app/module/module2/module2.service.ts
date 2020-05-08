import { Injectable } from '@nestjs/common'
import { Module2Model } from '@shared/model/module2.model'
import { Module2MongoService } from '@shared/services/index.services'

@Injectable()
export class Module2Service {
  constructor(private module2MongoService: Module2MongoService) {}

  find(id: string): Promise<Module2Model> {
    throw new Error('Method not implemented.')
  }

  update(payload: Module2Model): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
