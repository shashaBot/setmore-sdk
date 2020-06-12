import BaseApi, { ISetmoreAttributes, ISetmoreResponse } from './base';

export default class Timeslot extends BaseApi {
  public readonly RESOURCE_PATH = '/bookingapi/slots';

  constructor(apiClient) {
    super(apiClient)
  }

  public async get(attributes: ISetmoreAttributes): Promise<ISetmoreResponse> {
    return this.makeRequest({
      ...this.makeRequestConfig(),
      method: 'POST',
      data: attributes,
    })
  }
}
