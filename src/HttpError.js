class HttpError extends Error {
  constructor({ message, statusCode }) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode,
      },
    };
  }
}

export default HttpError;
