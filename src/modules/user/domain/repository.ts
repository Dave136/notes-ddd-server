import { UserEntity } from './user';
import { UserEmail } from './value-object/user-email';
import { UserId } from './value-object/user-id';

export interface UserRepository {
  findUserById(id: UserId): Promise<UserEntity | null>;
  findByEmail(email: UserEmail): Promise<UserEntity | null>;
  register(user: UserEntity): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[]>;
}
