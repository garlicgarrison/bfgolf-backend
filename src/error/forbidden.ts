export default class ForbiddenError extends Error {
  status: number;

  constructor(message: string) {
    super(message);

    this.name = "Forbidden";
    this.status = 403;
  }
}
