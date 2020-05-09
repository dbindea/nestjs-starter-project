import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export interface IUser extends mongoose.Document {
  email: string
  name?: string
  password?: string
}
