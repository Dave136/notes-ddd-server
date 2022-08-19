import BaseController from '@infrastructure/models/base-controller';
import EmailTakenError from '@modules/user/domain/error/email-taken-error';
import UserMapper from '@modules/user/infrastructure/mapper';
import CreateUserDTO from './create-user-dto';
import CreateUserUseCase from './create-user-use-case';

import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RouteGenericInterface } from 'fastify/types/route';
import type { IncomingMessage, Server, ServerResponse } from 'http';

export default class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super('create-user-use-case');
    this.useCase = useCase;
  }

  protected async impl(
    req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
    reply: FastifyReply<
      Server,
      IncomingMessage,
      ServerResponse,
      RouteGenericInterface,
      unknown
    >,
  ): Promise<unknown> {
    try {
      const dto = req.body as CreateUserDTO;
      const user = await this.useCase.execute(dto);
      const response = UserMapper.intoDTO(user);

      this.created(reply);

      return reply.send(response);
    } catch (err: any) {
      if (err instanceof EmailTakenError) {
        return this.badRequest(reply, err.message);
      }

      return this.serverError(reply, err.toString());
    }
  }
}
