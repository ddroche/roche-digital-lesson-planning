<template lang="jade">
    div
        nav.navbar.navbar-default
            .container
                ul.nav.navbar-nav
                    li
                        a(v-link="") Welcome{{ user.name }}!
                    li
                        a(v-link="'home'") Home
                    li
                        a(v-link="'login'" v-if="!user.authenticated") Login
                    li
                        a(v-link="'signup'" v-if="!user.authenticated") Sign Up
                    li
                        a(v-link="'profile'" v-if="user.authenticated") Profile
                    li
                        a(v-link="'login'" v-if="user.authenticated" @click="logout()") Logout
        .container
            router-view
</template>

<script>
    import auth from '../auth'

    export default {
        name: "App",
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