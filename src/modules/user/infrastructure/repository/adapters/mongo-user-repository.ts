import { UserEntity } from '@modules/user/domain/user';
import { UserRepository } from '@modules/user/domain/repository';
import { UserEmail } from '@modules/user/domain/value-object/user-email';
import { UserId } from '@modules/user/domain/value-object/user-id';
import { UserSchema } from '@modules/user/infrastructure/model/user.schema';
import UserMapper from '../../mapper';

const users: UserSchema[] = [
  {
    id: '1',
    name: 'John',
    email: 'john@example.com',
    password: 'password',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class MongoRepository implements UserRepository {
  async findByEmail(email: UserEmail): Promise<UserEntity | null> {
    const emailValue = email.value;
    const user = users.find((user) => user.email === emailValue);

    if (!user) return null;

    return user as unknown as UserEntity;
  }

  async findUserById(id: UserId): Promise<UserEntity | null> {
    const user = users.find((user) => user.id === id.idValue());
    if (!user) return null;

    // TODO: Mappipng to transform into Domain object
    return UserMapper.intoDomain(user);
  }
  async register(user: UserEntity): Promise<UserEntity | null> {
    const existUser = users.find((userdb) => userdb.email === user.email.value);

    if (existUser) {
      return null;
    }

    users.push(user as unknown as UserSchema);

    return user;
  }
  async findAll(): Promise<UserEntity[]> {
    return users.map((user) => UserMapper.intoDomain(user)) as UserEntity[];
  }
}
