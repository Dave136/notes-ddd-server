import { gql } from 'mercurius-codegen';
import { Actions } from '@infrastructure/plugins/actions';
import { UserEntity } from '@modules/user/domain/user';
import UserMapper from '../mapper';

export const Schema = gql`
  type Query {
    users: [User]!
    user(id: String!): User
  }

  type Mutation {
    register(user: CreateUserInput!): User
  }
`;

export const resolver = {
  Query: {
    users: async (
      _root: any,
      _args: any,
      { actions }: { actions: Actions },
    ) => {
      const users = await actions.useCase.user.findAll.execute();

      if (users.length === 0) {
        return [];
      }

      return users.map((user: UserEntity) => UserMapper.intoDTO(user));
    },
    user: async (
      _root: any,
      args: { id: string },
      { actions }: { actions: Actions },
    ) => {
      const user = await actions.useCase.user.findUser.execute({ id: args.id });

      if (!user) {
        return null;
      }

      return UserMapper.intoDTO(user);
    },
  },
};
