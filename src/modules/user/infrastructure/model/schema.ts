import { Schema, model } from 'mongoose';

export interface IUserSchema {
  id: string;
  email: string;
  username: string;
  password: string;
  token?: string;
  refreshToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = model('users', UserSchema);

export default UserModel;
