import axios from 'axios';

export default () => axios.create({
  baseURL: `http://39.104.169.237/index/returnJson`,
  headers: {
    // Authorization: `Bearer ${store.state.token}`
  }
});
