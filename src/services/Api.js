import axios from 'axios';
import config from '@/config';
import store from '@/store';
// import data from '@/mockdata/scoreTags';
let instance = axios.create({
  baseURL: config.baseURL,
  timeout: 1
  // timeout: 1000,

});
instance.interceptors.response.use(response => {
  // TODO: some auth stuff
  let data = response.data.data;
  if (data) {
    return data;
  } else {
    return response.data;
  }
}, error => {
  store.dispatch('showSnackbar', '网络似乎出现了问题，请稍后再试。');
  // return {
  //   content: data
  // };
  return Promise.reject(error);
});

export default instance;
