import BaseApi, { ResourcePath, ISetmoreResponse } from "./base";

export default class Appointment extends BaseApi {
  public readonly RESOURCE_PATH: ResourcePath = {
    GET: '/bookingapi/appointments',
    CREATE: '/bookingapi/appointment/create'
  };

  constructor(accessToken: string) {
    super(accessToken);
  }

  public async updateLabel(appointmentKey: string, attributes: {label: string}): Promise<ISetmoreResponse> {
    return this.makeRequest({
      ...this.makeRequestConfig(),
      url: `/bookingapi/appointments/${appointmentKey}/label`,
      data: attributes
    })
  }
}
