const PASSWORD_RULES = [
  'At least one upper case character',
  'At least one lower case character',
  'At least one digit',
  'At least one special character or space',
  'Minimum eight characters',
];

export default class InvalidPassword extends Error {
  constructor() {
    super(
      `The password provided doesn't meet policy requirements.\n${PASSWORD_RULES.concat(
        '\n',
      )}`,
    );
    this.name = 'InvalidPassword';
  }
}
