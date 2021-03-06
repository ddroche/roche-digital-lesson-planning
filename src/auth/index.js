import {router} from '../index';
import conf from '../config';

// URL and endpoint constants
//const API_URL = conf.API_URL;
const LOGIN_URL = conf.API_URL + '/login';
const SIGNUP_URL = conf.API_URL + '/signup';

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
    name: ''
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);

      this.user.authenticated = true;
      this.user.name = ' ' + data.name;

      // Redirect to a specified route
      if (redirect) {
        router.go(redirect);
      }

    }).error((err) => {
      context.error = err;
    });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);

      this.user.authenticated = true;
      this.user.name = ' ' + data.name;

      if (redirect) {
        router.go(redirect);
      }

    }).error((err) => {
      context.error = err;
    });
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
    this.user.name = '';
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    };
  }
};
