/* import { UserUseCase } from '@modules/user/application/user-use-case';
import UserController from '@modules/user/infrastructure/controller/user.ctrl';
import { MongoRepository } from '@modules/user/infrastructure/repository';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

// Initialize repository
const userRepository = new MongoRepository();

// Initialize use case
const userUseCase = new UserUseCase(userRepository);

// Initialize controller
const userController = new UserController(userUseCase);

export default fp(
  (fastify: FastifyInstance, _: any, next: (err?: Error) => void) => {
    fastify.get('/user', userController.getAllCtrl);
    fastify.post('/user', userController.insertCtrl);
    next();
  },
);
 */
