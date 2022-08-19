import { createUserUseCase } from '@modules/user/application/use-case/create-user';
import CreateUserUseCase from '@modules/user/application/use-case/create-user/create-user-use-case';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

export interface Actions {
  useCase: {
    user: {
      register: CreateUserUseCase;
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
