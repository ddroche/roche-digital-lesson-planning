<template lang="jade">
    include ./mixins/forms.jade
    div
        .container
            .col-sm-5.col-sm-offset-1
                h1 Roche Digital Lesson Planning!
                h3 An innovative approche to learning
            .col-md-5.col-md-offset-1
                h2 Welcome Members!
                +login
                .row
                    .col-md-offset-7
                        button(type='submit' @click="signup()").btn.btn-default Not a member yet?
</template>

<script>
    import auth from '../auth'
    import conf from '../config'
    import {router} from '../index';

    export default {
        data() {
            return {
                quote: '',
                credentials: {
                    username: '',
                    password: ''
                },
            }
        },
        methods: {
            getQuote() {
                this.$http
                        .get('http://localhost:3001/api/random-quote', (data) => {
                    this.quote = data;
            })
            .error((err) => console.log(err))
            },
            submit() {
                var credentials = {
                    username: this.credentials.username,
                    password: this.credentials.password
                }
                auth.login(this, credentials, '/secretquote')
            },
            signup() {
                router.go('/signup');
            }
        }
    }
</script>