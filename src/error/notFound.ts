export default class NotFoundError extends Error {
  status: number;

  constructor(message: string) {
    super(message);

    this.name = "NotFound";
    this.status = 404;
  }
}
