import { mongoUserRepo } from '@modules/user/infrastructure/repository';
import CreateUserController from './create-user-controller';
import CreateUserUseCase from './create-user-use-case';

export const createUserUseCase = new CreateUserUseCase(mongoUserRepo);
export const createUserController = new CreateUserController(createUserUseCase);
