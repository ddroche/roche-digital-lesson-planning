<template lang="jade">
    include ./mixins/loginForm.jade
    .col-sm-5.col-sm-offset-1
        h1 Roche Digital Lesson Planning!
        h3 An innovative approche to learning
    .col-md-5.col-md-offset-1
        h2 Welcome Members!
        +loginForm
        .container
            p.col-md-offset-2 Not a member yet?
            button.col-md-offset-2(type='submit' @click="submit()").btn.btn-default Register
</template>

<script>
    import auth from '../auth'
    import conf from '../config'

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
            auth.login(this, credentials, 'secretquote')
            }
        }
    }
</script>