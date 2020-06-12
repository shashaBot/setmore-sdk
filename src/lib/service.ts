import BaseApi from "./base";

export default class Service extends BaseApi {
  public readonly RESOURCE_PATH = '/bookingapi/services';

  constructor(apiClient) {
    super(apiClient)
  }
}
