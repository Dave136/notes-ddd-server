import AggregateRoot from '@common/aggregate-root';
import EntityID from '@common/entity-id';
import { RefreshToken, Token } from './jwt';
import { UserEmail } from './value-object/user-email';
import { UserId } from './value-object/user-id';
import { UserName } from './value-object/user-name';
import UserPassword from './value-object/user-password';

export interface UserProps {
  email: UserEmail;
  username: UserName;
  password: UserPassword;
  token?: Token;
  refreshToken?: RefreshToken;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserEntity extends AggregateRoot<UserProps> {
  private constructor(props: UserProps, id?: EntityID | string) {
    const entityId = EntityID.create(id);
    super(props, entityId);
  }

  get userId(): UserId {
    return UserId.create(this.entity_id);
  }

  get email(): UserEmail {
    return this.props.email;
  }

  get username(): UserName {
    return this.props.username;
  }

  get password(): UserPassword {
    return this.props.password;
  }

  get token(): string | undefined {
    return this.props.token;
  }

  get refreshToken(): string | undefined {
    return this.props.refreshToken;
  }

  setToken(token: Token, refreshToken: RefreshToken): void {
    this.props.token = token;
    this.props.refreshToken = refreshToken;
  }

  static create(props: UserProps, id?: EntityID | string): UserEntity {
    const user = new UserEntity(props, id);
    return user;
  }
}
