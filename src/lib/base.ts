import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface ISetmoreAttributes {
  [key: string]: any
}

export interface ISetmoreResponse {
  [key: string]: any;
}

export interface IResourcePath {
  GET: string,
  CREATE?: string
}

export type ResourcePath = IResourcePath | string;

export function isIResourcePath(x: any): x is IResourcePath {
  return typeof x === 'object' && "GET" in x;
}

export default abstract class BaseApi {
  public abstract readonly RESOURCE_PATH: ResourcePath = {
    GET: '/',
    CREATE: '/'
  };
  public readonly baseUri: string = 'https://developer.setmore.com/api/v1';

  public accessToken: string | null;
  private api: AxiosInstance;


  constructor(accessToken: string | null = null) {
    this.accessToken = accessToken;
    // create axios api
    this.api = axios.create()
    // request interceptors
    // this.api.interceptors.request.use((params: AxiosRequestConfig) => {
    //   ...params
    // })

    // response interceptors
    // this.api.interceptors.response.user((params: AxiosResponse) => {
    //   ...params
    // })


  }

  public get(attributes: ISetmoreAttributes): Promise<ISetmoreResponse> {
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
      data: attributes,
      method: 'POST',
      ...this.makeRequestConfig(this.RESOURCE_PATH.CREATE)
    }
    return this.makeRequest(config);
  }

  protected makeRequestConfig(url?: string): AxiosRequestConfig {
    // tslint:disable-next-line: no-console
    console.log('blahblah')
    // tslint:disable-next-line: no-console
    console.log(this.accessToken)
    const requestConfig: AxiosRequestConfig = {
      baseURL: this.baseUri,
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      },
      url: url || (isIResourcePath(this.RESOURCE_PATH) ? this.RESOURCE_PATH.GET : this.RESOURCE_PATH),
    }
    return requestConfig;
  }

  protected async makeRequest(requestConfig: AxiosRequestConfig = this.makeRequestConfig()): Promise<ISetmoreResponse> {
    return this.api(requestConfig);
  }
}
