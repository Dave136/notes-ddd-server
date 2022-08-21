import { mongoUserRepo } from '@modules/user/infrastructure/repository';
import FindAllUsersUseCase from './find-all-users-use-case';

export const findAllUsersUseCase = new FindAllUsersUseCase(mongoUserRepo);
