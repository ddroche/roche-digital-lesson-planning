<template lang="jade" id="signup-template">
   include ./mixins/forms.jade
   div
     .container
       h1.col-md-12 Register
     .row
      +signup
</template>

<script>
  import auth from '../auth'
  import conf from '../config'

  export default {
    data() {
      return {
        credentials: {
          firstName: '',
          lastName: '',
          gradeLevel: '',
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        var credentials = {
          firstName: this.credentials.firstName,
          lastName: this.credentials.lastName,
          gradeLevel: this.credentials.gradeLevel,
          username: this.credentials.username,
          password: this.credentials.password
        }
        auth.signup(this, credentials, '/secretquote')
      }
    }
  }
</script>
