import fp from 'fastify-plugin';
import cors from '@fastify/cors';
import mercuriusPlugin from '../plugins/mercurius';

import type { FastifyInstance } from 'fastify';

export default fp(
  (fastify: FastifyInstance, _: any, next: (err?: Error) => void) => {
    fastify.register(cors);
    fastify.register(mercuriusPlugin);
    next();
  },
);
