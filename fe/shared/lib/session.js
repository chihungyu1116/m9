// import request from 'axios';

// function isClient() {
//    return typeof window != 'undefined' && window.document;
// }

// class Session {
//   constructor() {
//     this.name = null
//     this.roles = null
//     this.token = null
//   }

//   login(name, roles, token) {
//     this.name = name;
//     this.roles = roles;
//     localStorage.token = res.token;
//   }

//   loggedIn() {
//     return !!this.getToken();
//   }
  
//   logout(cb) {
//     delete localStorage.token;
//   }

//   getToken() {
//     return localStorage.token;
//   }

//   auth() {
//     return request.post('http://localhost:3000/session/authenticate')
//   }
// }

// let session = new Session;

// export default session