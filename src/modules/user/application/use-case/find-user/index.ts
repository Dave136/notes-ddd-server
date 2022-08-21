import { mongoUserRepo } from '@modules/user/infrastructure/repository';
import FindUserController from './find-user-controller';
import FindUserUseCase from './find-user-use-case';

export const findUserUseCase = new FindUserUseCase(mongoUserRepo);
export const findUserController = new FindUserController(findUserUseCase);
