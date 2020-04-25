// import { AxiosRequestConfig } from "axios";
import BaseApi, { ResourcePath } from "./base";

export default class Staff extends BaseApi {
  public readonly RESOURCE_PATH: ResourcePath = '/bookingapi/staffs';

  constructor() {
    super()
  }

  // public get(): Promise<ISetmoreResponse> {
  //   const config: AxiosRequestConfig = {
  //     baseURL: this.baseUri,
  //     url: this.RESOURCE_PATH
  //   }
  //   return this.makeRequest(config)
  // }
}
