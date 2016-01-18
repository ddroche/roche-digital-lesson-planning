<template lang="jade">
include ./mixins/sidebar.jade
include ./mixins/forms.jade
.row
 +sidebar //- .col-sm-2
 .col-sm-10
    h1.col-sm-12 Lesson Plans are coming soon!
</template>

<script>
  import auth from '../auth'

  export default {
    name: "LessonPlans",
    data() {
      return {
        user: auth.user
      }
    },
    methods: {

    }
  }
</script>