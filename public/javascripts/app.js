/**
 * Created by Roche on 1/6/16.
 */

// new vue instance to test

new Vue({
  el: '#app',
  ready: function() {
    this.$http.get('/users').then(function (response) {
      console.log(response);
    });
  },
  data: {
    loginEmail: '',
    loginPass: '',
    message: 'Hello from Vue!'
  }
})
