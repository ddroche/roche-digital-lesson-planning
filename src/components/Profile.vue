<template lang="jade">
  include ./mixins/sidebar.jade
  .row
    +sidebar //- .col-sm-2
    .col-sm-10
      h3 Hi {{ user.name }}
</template>

<script>
  import auth from '../auth'
  import { modal as Modal } from 'vue-strap'

  export default {
    name: "Profile",
    props: [],
    data() {
        return {
          user: auth.user,
          showModal: false
        }
    },
    methods: {
      addLesson() {
        this.showModal = true
      }
    },
    components: {
      Modal
    }
  }
</script>