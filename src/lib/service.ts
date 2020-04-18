import BaseApi from "./base";

export default class Service extends BaseApi {
  public readonly RESOURCE_PATH = '/services';

  constructor(accessToken: string) {
    super(accessToken)
  }
}
