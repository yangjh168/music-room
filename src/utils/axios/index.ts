import { AxiosRequestConfig, AxiosResponse } from 'axios'
import service from './service'
import config from './config'

const { defaultHeaders } = config

const request = (option: AxiosRequestConfig) => {
  const { url, method, params, data,  responseType } = option
  return service.request({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: {
      'Content-Type':  defaultHeaders
    }
  })
}

export default {
  get: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'get', ...option }) as Promise<AxiosResponse<T>>
  },
  post: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'post', ...option }) as Promise<AxiosResponse<T>>
  },
  delete: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'delete', ...option }) as Promise<AxiosResponse<T>>
  },
  put: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'put', ...option }) as Promise<AxiosResponse<T>>
  },
  cancelRequest: (url: string | string[]) => {
    return service.cancelRequest(url)
  },
  cancelAllRequest: () => {
    return service.cancelAllRequest()
  }
}