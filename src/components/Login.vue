<template lang="jade">
  include ./mixins/forms.jade
  div
    .container
      h1.col-md-12 Login
    .row
      +login
</template>

<script>
  import auth from '../auth'
  import conf from '../config'

  export default {
    name: "Login",
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
        auth.login(this, credentials, '/secretquote')
      }
    }

  }
</script>