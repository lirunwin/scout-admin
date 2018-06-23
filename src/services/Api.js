import axios from 'axios';
import config from '@/config';
let instance = axios.create({
  baseURL: config.baseURL,
  // timeout: 1000,

});
instance.interceptors.response.use(response => {
  // TODO: some auth stuff
  console.log(response)
  let data = response.data.data
  if(data) {
    return data
  } else {
    return response.data
  }
}, error => {
  console.log({error});
  return Promise.reject(error);
});

export default instance;
