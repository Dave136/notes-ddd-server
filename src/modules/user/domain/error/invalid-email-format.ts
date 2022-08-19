export default class InvalidEmailFormat extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'InvalidEmailFormat';

    console.log('Error: ', this.name, message);
  }
}
