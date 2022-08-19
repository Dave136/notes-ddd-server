export default class UserNameMaxLengthError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'UserNameMaxLengthError';

    console.log('Error: ', this.name, message);
  }
}
