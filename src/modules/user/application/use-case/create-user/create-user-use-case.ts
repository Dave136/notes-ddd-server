import UseCase from '@common/use-case';
import EmailTakenError from '@modules/user/domain/error/email-taken-error';
import { UserEntity } from '@modules/user/domain/user';
import { UserRepository } from '@modules/user/domain/repository';
import { UserEmail } from '@modules/user/domain/value-object/user-email';
import { UserName } from '@modules/user/domain/value-object/user-name';
import UserPassword from '@modules/user/domain/value-object/user-password';
import CreateUserDTO from './create-user-dto';

export default class CreateUserUseCase
  implements UseCase<CreateUserDTO, UserEntity>
{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(input: CreateUserDTO): Promise<UserEntity> {
    const email = UserEmail.create(input.email);
    const username = UserName.create(input.username);
    const password = await UserPassword.create(input.password);
    const emailTaken = await this.userRepository.findByEmail(email);

    if (emailTaken) {
      throw new EmailTakenError(`The email "${email}" is already taken`);
    }

    const user = UserEntity.create({
      email,
      username,
      password,
    });

    return this.userRepository.register(user);
  }
}
