import BaseApi, { ResourcePath } from "./base";

export default class Customer extends BaseApi {
  public readonly RESOURCE_PATH: ResourcePath = {
    GET: '/bookingapi/customer',
    CREATE: '/bookingapi/customer/create'
  };

  constructor(apiClient) {
    super(apiClient)
  }
}
