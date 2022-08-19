import Mapper from '@common/mapper';
import UserDTO from '../domain/dto';
import { UserEntity } from '../domain/user';
import { UserEmail } from '../domain/value-object/user-email';
import { UserName } from '../domain/value-object/user-name';
import UserPassword from '../domain/value-object/user-password';

const UserMapper: Mapper<UserEntity | Promise<UserEntity>, UserDTO, any> = {
  intoDTO: (domain: UserEntity) => ({
    id: domain.userId.idValue(),
    email: domain.email.value,
    username: domain.username.value,
  }),
  intoDomain: async (raw: Record<string, unknown>): Promise<UserEntity> => {
    const email = UserEmail.create(raw.email as string);
    const username = UserName.create(raw.username as string);
    const password = await UserPassword.create(raw.password as string);

    const user = UserEntity.create(
      {
        email,
        username,
        password,
      },
      raw.id as string,
    );

    return user;
  },
  intoPersistence: (domain: UserEntity) => ({
    id: domain.userId.idValue(),
    email: domain.email.value,
    username: domain.username.value,
    password: domain.password.value,
  }),
};

export default UserMapper;
