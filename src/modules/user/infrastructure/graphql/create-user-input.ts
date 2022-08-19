import { gql } from 'mercurius-codegen';

export interface CreateUserInput {
  email: string;
  username: string;
  password: string;
}

export const CreateUserInputSchema = gql`
  input CreateUserInput {
    email: String!
    username: String!
    password: String!
  }
`;
