import { Injectable, ConflictException, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IUser } from '@shared/schema/user.schema'
import { Model } from 'mongoose'
import { User } from '@shared/model/user.model'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(user: User): Promise<any> {
    try {
      const userObj = new this.userModel(user)
      await userObj.save()
      return { id: userObj._id }
    } catch (error) {
      throw new ConflictException('Duplicate: ' + error.message)
    }
  }

  async find(id: string): Promise<any> {
    try {
      let userObj = await this.userModel.findById(id)
      if (!userObj) throw new NotFoundException()
      userObj.password = undefined
      return userObj
    } catch (error) {
      throw new NotFoundException('Not found: ' + error.message)
    }
  }

  async findByEmail(email: string, showPassword: boolean = false): Promise<any> {
    let userObj: User = new User()
    await this.userModel.findOne({ email: email }, (err, result) => {
      userObj = result
      if (!showPassword) {
        userObj.password = undefined
      }
    })
    return userObj
  }
}
