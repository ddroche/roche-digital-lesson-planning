<template lang="jade">
include ./mixins/sidebar.jade
include ./mixins/forms.jade
.row
  +sidebar //- .col-sm-2
  .col-sm-10
    h1.col-sm-12 Calendar is coming soon!
</template>

<script>
  import auth from '../auth'

  export default {
    name: "Calendar",
    data() {
      return {
        user: auth.user,
      }
    },
    methods: {

    }
  }
</script>