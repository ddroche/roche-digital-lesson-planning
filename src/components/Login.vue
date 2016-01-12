<template lang="jade">
  include ./mixins/loginForm.jade
  .container
    h1.col-md-12 Login
  .row
    +loginForm
</template>

<script>
  import auth from '../auth'
  import conf from '../config'

  export default {
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        auth.login(this, credentials, 'secretquote')
      }
    }

  }
</script>