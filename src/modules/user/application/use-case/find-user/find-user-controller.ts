import BaseController from '@infrastructure/models/base-controller';
import UserMapper from '@modules/user/infrastructure/mapper';
import FindUserDTO from './find-user-dto';
import FindUserUseCase from './find-user-use-case';

import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RouteGenericInterface } from 'fastify/types/route';
import type { IncomingMessage, Server, ServerResponse } from 'http';

export default class FindUserController extends BaseController {
  private useCase: FindUserUseCase;

  constructor(useCase: FindUserUseCase) {
    super('find-user-use-case');
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
      const dto = req.body as FindUserDTO;
      const user = await this.useCase.execute(dto);
      const response = UserMapper.intoDTO(user);

      this.ok(reply);

      return reply.send(response);
    } catch (err: any) {
      return this.serverError(reply, err.toString());
    }
  }
}
