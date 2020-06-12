// import { AxiosRequestConfig } from "axios";
import BaseApi, { ResourcePath } from "./base";

export default class Staff extends BaseApi {
  public readonly RESOURCE_PATH: ResourcePath = '/bookingapi/staffs';

  constructor(apiClient) {
    super(apiClient)
  }
}
