import { UserEntity } from '@modules/user/domain/user';
import { UserRepository } from '@modules/user/domain/repository';
import { UserEmail } from '@modules/user/domain/value-object/user-email';
import { UserId } from '@modules/user/domain/value-object/user-id';
import UserModel from '@modules/user/infrastructure/model/schema';
import UserMapper from '../../mapper';

export class MongoRepository implements UserRepository {
  async findAll(): Promise<UserEntity[]> {
    const users = await UserModel.find();
    const allUsers = users.map(
      (user) => UserMapper.intoDomain(user as any) as UserEntity,
    );

    return allUsers;
  }

  async findByEmail(email: UserEmail): Promise<UserEntity | null> {
    const emailValue = email.value;
    const user = await UserModel.findOne({ email: emailValue });

    if (!user) return null;

    return UserMapper.intoDomain(user as any);
  }

  async findById(id: UserId): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ id: id.idValue() });
    if (!user) return null;

    return UserMapper.intoDomain(user as any);
  }

  async register(user: UserEntity): Promise<UserEntity | null> {
    const exists = await this.findByEmail(user.email);

    if (exists) {
      return null;
    }

    const data = UserMapper.intoPersistence(user);

    const newUser = new UserModel(data);

    await newUser.save();

    return UserMapper.intoDomain(newUser as any);
  }
}
