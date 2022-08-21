import UseCase from '@common/use-case';
import { UserRepository } from '@modules/user/domain/repository';
import { UserEntity } from '@modules/user/domain/user';
import { UserId } from '@modules/user/domain/value-object/user-id';
import FindUserDTO from './find-user-dto';

export default class FindUserUseCase
  implements UseCase<FindUserDTO, UserEntity>
{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(input: FindUserDTO): Promise<UserEntity> {
    const id = UserId.create(input.id);
    return this.userRepository.findById(id);
  }
}
