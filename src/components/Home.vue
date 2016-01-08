<template lang="jade">
    .col-sm-6.col-sm-offset-3
        h1 Get a Free Chuck Norris Quote!
        button.btn.btn-primary(v-on:click="getQuote()") Get a Quote
        .quote-area(v-if="quote")
            h2
                blockquote {{ quote }}
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            getQuote() {
                this.$http
                        .get('http://localhost:3001/api/random-quote', (data) => {
                    this.quote = data;
            })
            .error((err) => console.log(err))
            }
        }
    }
</script>