export default class BadRequestError extends Error {
  status: number;

  constructor(message: string) {
    super(message);

    this.name = "BadRequest";
    this.status = 400;
  }
}
