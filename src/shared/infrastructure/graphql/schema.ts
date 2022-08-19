import merge from 'lodash/merge';
import * as UserSchema from '@modules/user/infrastructure/graphql';
import type { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

export default function makeGraphqlSchema(): GraphQLSchema {
  const typeDefs = UserSchema.typeDefs;
  const resolvers = merge(UserSchema.resolvers);

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}
