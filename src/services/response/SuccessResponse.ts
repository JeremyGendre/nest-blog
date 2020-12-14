import MyResponse from './Response';

export default class SuccessResponse implements MyResponse {
  success = true;
  data: object;

  constructor(data: object) {
    this.data = data;
  }
}
