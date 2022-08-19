export default class UserNameNullOrUndefined extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'UserNameNullOrUndefined';

    console.log('Error: ', this.name, message);
  }
}
