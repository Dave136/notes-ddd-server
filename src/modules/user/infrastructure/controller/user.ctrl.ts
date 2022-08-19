// import { UserUseCase } from '@modules/user/application/user-use-case';
// import { UserEntity } from '@modules/user/domain/user';
// import type { FastifyReply, FastifyRequest } from 'fastify';

// export default class UserController {
//   constructor(private userUseCase: UserUseCase) {
//     this.getAllCtrl = this.getAllCtrl.bind(this);
//     this.insertCtrl = this.insertCtrl.bind(this);
//   }

//   async getAllCtrl(_req: FastifyRequest, reply: FastifyReply) {
//     const users = await this.userUseCase.findAll();
//     reply.status(200).send(users);
//   }

//   async insertCtrl({ body }: FastifyRequest, reply: FastifyReply) {
//     const user = await this.userUseCase.register(body as UserEntity);
//     reply.status(201).send(user);
//   }
// }
