import ValueObject from '@common/value-object';
import UserNameMaxLengthError from '../error/username-max-length-error';
import UserNameMinLengthError from '../error/username-minlength-error';
import UserNameNullOrUndefined from '../error/username-null-or-invalid';

export interface UserNameProps {
  name: string;
}

export class UserName extends ValueObject<UserNameProps> {
  private constructor(props: UserNameProps) {
    super(props);
  }

  private static maxLength: number = 15;
  private static minLength: number = 2;

  private static hasAtLeast(name: string): boolean {
    return name.length >= this.minLength;
  }

  private static hasAtMost(name: string): boolean {
    return name.length <= this.maxLength;
  }

  private static isNullOrUndefined(name: string): boolean {
    return name === null || name === undefined;
  }

  get value(): string {
    return this.props.name;
  }

  static create(name: string): UserName {
    const isNullOrUndefined = this.isNullOrUndefined(name);

    if (isNullOrUndefined) {
      throw new UserNameNullOrUndefined(`Username is null or undefined`);
    }

    const minLength = this.hasAtLeast(name);
    if (!minLength) {
      throw new UserNameMinLengthError(
        `Username must be at least ${minLength} characters`,
      );
    }

    const maxLength = this.hasAtLeast(name);
    if (!maxLength) {
      throw new UserNameMaxLengthError(
        `Username must be at most ${maxLength} characters`,
      );
    }

    return new UserName({ name });
  }
}
