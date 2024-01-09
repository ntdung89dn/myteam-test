import {
  AxiosError,
  AxiosInstance,
  // AxiosRequestConfig, // Change to InternalAxiosRequestConfig
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import axiosClient from 'axios';

// For Make Log on Develop Mode
const logOnDev = (message: string) => {
  if (process.env.REACT_APP_ENV === 'development') {
    console.log(message);
  }
};

// Request Interceptor
const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const { method, url } = config;
  // Set Headers Here
  // Check Authentication Here
  // Set Loading Start Here
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  if (method === 'get') {
    config.timeout = 15000;
  }
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;
  // Set Loading End Here
  // Handle Response Data Here
  // Error Handling When Return Success with Error Code Here
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axiosClient.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { statusText, status } = (error.response as AxiosResponse) ?? {};

    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );

    switch (status) {
      case 401: {
        // "Login required"
        break;
      }
      case 403: {
        // "Permission denied"
        break;
      }
      case 404: {
        // "Invalid request"
        break;
      }
      case 500: {
        // "Server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }

    if (status === 401) {
      // Delete Token & Go To Login Page if you required.
      sessionStorage.removeItem('token');
    }
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`);
  }

  return Promise.reject(error);
};

export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);

  return instance;
};

//
// const requestApi: AxiosInstance = axiosClient.create({
//   baseURL: process.env.NEXT_PUBLIC_HOST,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
//
// interface RetryConfig extends AxiosRequestConfig {
//   retry: number;
//   retryDelay: number;
// }
//
// const globalConfig: RetryConfig = {
//   retry: 3,
//   retryDelay: 1000,
// };
//
// const axios = <T>(cfg: AxiosRequestConfig) => requestApi.request<any, T>(cfg);
