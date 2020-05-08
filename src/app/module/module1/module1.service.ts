import { Injectable } from '@nestjs/common'
import { Module1Model } from '@shared/model/module1.model'

@Injectable()
export class Module1Service {
  find(id: string) {
    return { id }
  }

  update(payload: Module1Model) {
    return { payload }
  }
}
