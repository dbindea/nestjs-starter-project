import { Injectable, ConflictException, NotFoundException } from '@nestjs/common'
import { Model } from 'mongoose'
import { IModule2 } from '@shared/schema/module2.schema'
import { Module2Model } from '@shared/model/module2.model'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class Module2MongoService {
  constructor(@InjectModel('Module2Collection') private readonly model2Model: Model<IModule2>) {}

  async create(model2Model: Module2Model): Promise<any> {
    try {
      const model2Obj = new this.model2Model(model2Model)
      await model2Obj.save()
      return { id: model2Obj._id }
    } catch (error) {
      throw new ConflictException(`Duplicate: ${error.message}`)
    }
  }

  async find(id: string): Promise<any> {
    try {
      let model2Obj = await this.model2Model.findById(id)
      if (!model2Obj) throw new NotFoundException()
      return model2Obj
    } catch (error) {
      throw new NotFoundException(`Not found: ${error.message}`)
    }
  }
}
