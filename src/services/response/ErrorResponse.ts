import MyResponse from './Response';

export default class ErrorResponse implements MyResponse {
  success = false;
  message = 'An error occured. Action failed.';

  constructor(message: string) {
    this.message = message;
  }
}
