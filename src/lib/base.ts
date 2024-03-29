import { AxiosInstance, AxiosRequestConfig } from "axios";

export interface ISetmoreAttributes {
  [key: string]: any
}

export interface ISetmoreResponse<T=any> {
  data: T;
  [key: string]: any
}

export interface IResourcePath {
  GET: string,
  CREATE?: string
}

export type ResourcePath = IResourcePath | string;

export function isIResourcePath(x: any): x is IResourcePath {
  return typeof x === "object" && "GET" in x;
}

export default abstract class BaseApi {
  public static readonly  baseUri: string = 'https://developer.setmore.com/api/v1';
  public static readonly authTokenPath: string = '/o/oauth2/token';

  public abstract readonly RESOURCE_PATH: ResourcePath = {
    GET: '/',
    CREATE: '/'
  };

  public refreshToken: string;
  public accessToken: string;
  private api: AxiosInstance;

  constructor(apiClient) {
    this.api = apiClient
  }

  public setRefreshToken(token: string) {
    this.refreshToken = token;
  }

  public get(attributes: ISetmoreAttributes = {}): Promise<ISetmoreResponse> {

    const requestConfig: AxiosRequestConfig = {
      params: attributes,
      ...this.makeRequestConfig()
    }
    return this.makeRequest(requestConfig);
  }

  public async create(attributes: ISetmoreAttributes): Promise<ISetmoreResponse> {
    if(!isIResourcePath(this.RESOURCE_PATH)) {
      throw Error('CREATE resource path not defined!')
    }

    const config: AxiosRequestConfig = {
      ...this.makeRequestConfig(this.RESOURCE_PATH.CREATE),
      data: attributes,
      method: 'POST'
    }
    return this.makeRequest(config);
  }

  protected makeRequestConfig(url?: string): AxiosRequestConfig {
    const requestConfig: AxiosRequestConfig = {
      baseURL: BaseApi.baseUri,
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      },
      url: url || (isIResourcePath(this.RESOURCE_PATH) ? this.RESOURCE_PATH.GET : this.RESOURCE_PATH),
    }
    return requestConfig;
  }

  protected async makeRequest(requestConfig: AxiosRequestConfig = this.makeRequestConfig()): Promise<ISetmoreResponse> {
    const response = await this.api.request<ISetmoreResponse>(requestConfig);
    return response;
  }
}
