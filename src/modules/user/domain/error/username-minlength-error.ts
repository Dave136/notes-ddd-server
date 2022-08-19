export default class UserNameMinLengthError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'UserNameMinLengthError';

    console.log('Error: ', this.name, message);
  }
}
