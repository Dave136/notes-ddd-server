import { gql } from 'mercurius-codegen';

export default gql`
  type User {
    id: ID!
    username: String!
    email: String!
    name: String!
  }
`;
