import fastify from 'fastify';

const startServer = async () => {
  const server = fastify();

  const port = process.env.PORT || 9091;
  const host = process.env?.HOST ?? '0.0.0.0';

  server.get('/', (_req, _reply) => {
    return { message: 'Hello world! ' };
  });

  server.listen({ port: +port, host }, (err, address) => {
    if (err) {
      throw err;
    }

    console.log(`🚀 Server ready at http://${address}`);
  });
};

startServer();
