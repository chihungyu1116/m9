import request from './request';

const session = {
  clearAuthToken: () => {
    delete localStorage.authToken;
  },
  setAuthToken: (authToken) => {
    localStorage.authToken = authToken;
  },
  getAuthToken: () => {
    return localStorage.authToken;
  },
  loggedIn: () => {
    return !!session.getAuthToken();
  },
  auth: () => {
    return request.post('/session/authenticate');
  }
}

export default session