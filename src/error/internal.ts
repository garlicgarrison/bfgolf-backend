export default class InternalError extends Error {
  status: number;

  constructor(message: string) {
    super(message);

    this.name = "Internal";
    this.status = 500;
  }
}
