import fastify from 'fastify';
import type { Actions } from '@infrastructure/plugins/actions';

declare module 'fastify' {
  export interface FastifyInstance {
    actions: Actions;
  }
}
