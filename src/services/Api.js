import axios from 'axios';
import config from '@/config';

let instance = axios.create({
  baseURL: config.baseURL,
  // timeout: 1000,

});
instance.interceptors.response.use(response => {
  // TODO: some auth stuff

  return response.data.data;
}, error => {
  console.log({error});
  return Promise.reject(error);
});

export default instance;
