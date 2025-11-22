export class EmailAlreadySeenError extends Error {
  constructor() {
    super('E-mail already seen.')
  }
}
