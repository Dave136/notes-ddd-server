import mercurius from 'mercurius';
import fp from 'fastify-plugin';
import makeGraphqlSchema from '@infrastructure/graphql/schema';
import type { FastifyInstance, FastifyRequest } from 'fastify';

const isDev = process.env.NODE_ENV === 'development';

const mercuriusPlugin = async (
  fastify: FastifyInstance,
  _: any,
  next: (err?: Error) => void,
) => {
  const schema = makeGraphqlSchema();

  fastify.register(mercurius, {
    schema,
    graphiql: isDev,
    context: (_req: FastifyRequest) => {
      return {
        actions: fastify.actions,
      };
    },
  });

  next();
};

export default fp(mercuriusPlugin, {
  name: 'fastify-mercurius-plugin',
});
