import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

interface IError extends Error {
  status?: number;
}

interface ISetmoreResponse<T=any> {
  data: T;
  [key: string]: any
}

interface ISetmoreAuthData {
    token?: {
      access_token: string,
      [key: string]: any
    },
    [key: string]: any
  }

export default (baseURL: string, refreshToken: string): AxiosInstance => {
  if (!refreshToken) { throw Error("Refresh Token is not present/valid!"); }
  let accessToken = null;

  const apiClient = axios.create({ baseURL })
  const REFRESH_AUTH_PATH = '/o/oauth2/token';

  const addAuthHeader = async (config: AxiosRequestConfig) => {
    if (!accessToken) {
      accessToken = await getAuthToken()
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config
  }

  const getAuthToken = async () => {
    const authResponse = await apiClient.get<ISetmoreResponse<ISetmoreAuthData>>(
      REFRESH_AUTH_PATH,
      {
        params: { refreshToken }
      }
    )
    if(!( 'token' in authResponse.data.data)) {
      const err: IError = new Error('Refresh Token is not valid!');
        err.status = 401;
        throw err;
    }
    else {
      return authResponse.data.data.token.access_token;
    }
  }

  const refreshAuth = async (failedRequest: AxiosResponse) => {
    accessToken = await getAuthToken()
    addAuthHeader(failedRequest.config)
    return Promise.resolve()
  }

  createAuthRefreshInterceptor(apiClient, refreshAuth)
  apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.url !== REFRESH_AUTH_PATH) {
      return addAuthHeader(config)
    }
    return config;
  })

  return apiClient;
}
