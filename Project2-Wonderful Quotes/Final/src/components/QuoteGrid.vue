<template>
    <div class="row">
        <div class="col-md-12">
            <app-quote
                v-for="(quote, index) in quotes"
                key="quote"
                @click.native="deleteQuote(index)">
                {{ quote }}</app-quote>
        </div>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        props: {
            quotes: Array
        },
        methods: {
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style>
</style>