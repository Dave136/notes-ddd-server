import { gql } from 'mercurius-codegen';
import { Actions } from '@infrastructure/plugins/actions';
import { UserEntity } from '@modules/user/domain/user';
import UserMapper from '../mapper';

export const Schema = gql`
  type Query {
    users: [User]!
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
      const users: any[] = [];

      if (users.length === 0) {
        return [];
      }

      return users.map((user: UserEntity) => UserMapper.intoDTO(user));
    },
  },
};
