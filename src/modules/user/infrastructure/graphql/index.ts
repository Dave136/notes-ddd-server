import User from './type';
import { Schema, resolver } from './schema';
import { CreateUserInputSchema } from './create-user-input';

export const typeDefs = [User, Schema, CreateUserInputSchema];
export const resolvers = resolver;
