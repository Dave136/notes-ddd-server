import fp from 'fastify-plugin';
import { createUserUseCase } from '@modules/user/application/use-case/create-user';
import CreateUserUseCase from '@modules/user/application/use-case/create-user/create-user-use-case';
import { findAllUsersUseCase } from '@modules/user/application/use-case/find-all-users';
import FindAllUsersUseCase from '@modules/user/application/use-case/find-all-users/find-all-users-use-case';
import type { FastifyInstance } from 'fastify';
import FindUserUseCase from '@modules/user/application/use-case/find-user/find-user-use-case';
import { findUserUseCase } from '@modules/user/application/use-case/find-user';

export interface Actions {
  useCase: {
    user: {
      register: CreateUserUseCase;
      findAll: FindAllUsersUseCase;
      findUser: FindUserUseCase;
    };
  };
}

const actionsPlugin = async (
  fastify: FastifyInstance,
  _: unknown,
  next: (err?: Error) => void,
) => {
  const actions: Actions = {
    useCase: {
      user: {
        findUser: findUserUseCase,
        findAll: findAllUsersUseCase,
        register: createUserUseCase,
      },
    },
  };

  fastify.decorate('actions', actions);

  next();
};

export default fp(actionsPlugin, {
  name: 'actions-plugin',
});
