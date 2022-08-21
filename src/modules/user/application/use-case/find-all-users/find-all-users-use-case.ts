import UseCase from '@common/use-case';
import { UserRepository } from '@modules/user/domain/repository';
import { UserEntity } from '@modules/user/domain/user';

export default class FindAllUsersUseCase
  implements UseCase<never, UserEntity[]>
{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
