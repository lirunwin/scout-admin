import axios from 'axios';
import config from '@/config';

let instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    // Authorization: `Bearer ${store.state.token}`
  }
});
instance.interceptors.response.use(response => {
  // TODO: some auth stuff

  return response.data.data;
}, error => {
  return Promise.reject(error);
});

export default instance;
