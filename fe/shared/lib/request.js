import axios from 'axios';
import session from './session';

let request = axios.create({
  baseURL: 'http://localhost:3000'
});

request.interceptors.request.use(function (config) {  
  config.headers.Authorization = 'm9 ' + session.getAuthToken();
  return config;
});

export default request