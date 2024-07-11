import axios from 'axios';
import { Message } from '@arco-design/web-react';

const BASE_URL = 'http://localhost:3000';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use(function (config) {
  config.headers = config.headers ?? {};
  const isPost = ['post', 'POST'].includes(config.method);
  if (isPost) {
    if (!config.data && config.params) {
      config.data = config.params;
      config.params = {};
    }
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    const code = response.data?.code;
    if (code >= 500) {
      Message.error('请求错误：' + String(error));
      return Promise.reject(error);
    }
    return response.data;
  },
  function (error) {
    Message.error('请求错误：' + String(error));
    return Promise.reject(error);
  }
);

export default instance;
