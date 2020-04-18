// import { AxiosRequestConfig } from "axios";
import BaseApi, { ResourcePath } from "./base";

export default class Staff extends BaseApi {
  public readonly RESOURCE_PATH: ResourcePath = '/o/oauth2/token';

  constructor() {
    super()
  }
}
