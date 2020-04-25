import BaseApi, { ResourcePath } from "./base";

export default class Customer extends BaseApi {
  public readonly RESOURCE_PATH: ResourcePath = {
    GET: '/customer',
    CREATE: '/customer/create'
  };

  constructor() {
    super()
  }
}
