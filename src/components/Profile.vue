<template lang="jade">
  include ./mixins/sidebar.jade
  .row
    +sidebar //- .col-sm-2
    .col-sm-10
      h3 Hi {{ user.name }}
</template>

<script>
  import auth from '../auth'
  import { lesson as Lesson} from './Lessons.vue'

  export default {
    name: "Profile",
    props: [],
    data() {
        return {
          user: auth.user,
        }
    },
    methods: {
    },
    components: {
      Lesson
    }
  }
</script>