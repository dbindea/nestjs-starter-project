import * as mongoose from 'mongoose'
import { Document } from 'mongoose'

export const Module2Schema = new mongoose.Schema(
  {
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export interface IModule2 extends Document {
  readonly description?: string
}
