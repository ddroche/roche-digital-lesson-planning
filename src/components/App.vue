<template lang="jade">
    nav.navbar.navbar-default
        .container
            ul.nav.navbar-nav
                li
                    a(v-link="'home'") Home
                li
                    a(v-link="'login'" v-if="!user.authenticated") Login
                li
                    a(v-link="'signup'" v-if="!user.authenticated") Sign Up
                li
                    a(v-link="'secretquote'" v-if="user.authenticated") Secret Quote
                li
                    a(v-link="'login'" v-if="user.authenticated" @click="logout()") Logout
    .container
        router-view
</template>

<script>
    import auth from '../auth'

    export default {
        data() {
            return {
                user: auth.user
            }
        },

        methods: {

            logout() {
                auth.logout()
            }
        }
    }
</script>