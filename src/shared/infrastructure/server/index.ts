import fastify from 'fastify';
// import userRoute from '@modules/user/infrastructure/routes/user.route';
import plugins from '../config/plugins';
import env from '../config/env';

const startServer = async () => {
  env();
  const server = fastify();

  const port = process.env.PORT || 9091;
  const host = process.env?.HOST ?? '0.0.0.0';

  server.get('/', (_req, _reply) => {
    return { message: 'Hello world! ' };
  });

  server.register(plugins);
  // server.register(userRoute);

  server.listen({ port: +port, host }, (err, address) => {
    if (err) {
      throw err;
    }

    console.log(`🚀 Server ready at ${address}`);
  });
};

startServer();
