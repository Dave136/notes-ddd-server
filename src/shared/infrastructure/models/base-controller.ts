import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RouteGenericInterface } from 'fastify/types/route';
import type { IncomingMessage, Server, ServerResponse } from 'http';

type Reply = FastifyReply<
  Server,
  IncomingMessage,
  ServerResponse,
  RouteGenericInterface,
  unknown
>;

export default abstract class BaseController {
  private identifier: string;

  constructor(identifier: string) {
    this.identifier = identifier;
  }

  private static response(
    reply: FastifyReply,
    statusCode: number,
    message: string,
  ): Reply {
    return reply.status(statusCode).send(message);
  }

  protected abstract impl(
    req: FastifyRequest,
    reply: FastifyReply,
  ): Promise<unknown>;

  async execute(req: FastifyRequest, reply: FastifyReply): Promise<unknown> {
    try {
      return this.impl(req, reply);
    } catch (err) {
      console.error(`[${this.identifier}]`, err);
    }
  }

  public created(reply: FastifyReply): Reply {
    return BaseController.response(reply, 201, '');
  }

  public badRequest(reply: FastifyReply, message?: string): Reply {
    return BaseController.response(reply, 400, message ?? 'Bad request');
  }

  public unauthorized(reply: FastifyReply, message?: string): Reply {
    return BaseController.response(reply, 401, message ?? 'Unauthorized');
  }

  public forbidden(reply: FastifyReply, message?: string): Reply {
    return BaseController.response(reply, 403, message ?? 'Forbidden');
  }

  public notFound(reply: FastifyReply, message?: string): Reply {
    return BaseController.response(reply, 404, message ?? 'Not Found');
  }

  public serverError(reply: FastifyReply, message?: string): Reply {
    return BaseController.response(
      reply,
      500,
      message ?? 'Internal Server Error',
    );
  }
}
