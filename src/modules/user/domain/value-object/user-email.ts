import ValueObject from '@common/value-object';
import InvalidEmailFormat from '../error/invalid-email-format';

export interface UserEmailProps {
  value: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
  private static EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private constructor(props: UserEmailProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  private static sanitize(email: string): string {
    return email.trim().toLowerCase();
  }

  private static isValid(email: string): boolean {
    return UserEmail.EMAIL_REGEX.test(email);
  }

  static create(email: string): UserEmail {
    const sanitized = UserEmail.sanitize(email);

    if (!UserEmail.isValid(sanitized)) {
      throw new InvalidEmailFormat(`The email ${sanitized} is invalid`);
    }

    return new UserEmail({ value: sanitized });
  }
}
