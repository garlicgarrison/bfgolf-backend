export default class UnauthorizedError extends Error {
  status: number;

  constructor(message: string) {
    super(message);

    this.name = "Unauthorized";
    this.status = 401;
  }
}
