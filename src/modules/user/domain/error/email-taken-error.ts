export default class EmailTakenError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'EmailTakenError';

    console.log('Error: ', this.name, message);
  }
}
