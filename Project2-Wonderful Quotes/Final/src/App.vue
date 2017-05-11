<template>
    <div class="container">
        <app-header :progress="progress"></app-header>
        <app-add-quote @addQuote="addQuote($event)"></app-add-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import AddQuote from './components/AddQuote.vue';
    export default {
        data(){
            return {
                quotes: ['Just a Quote to see something']
            };
        },
        computed:{
            progress(){
                return this.quotes.length;
            }
        },
        methods: {
            addQuote(quote){
                if (this.progress === 10) {
                    alert('You must delete some quotes!');
                    return;
                }
                this.quotes.push(quote);
            }
        },
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-add-quote': AddQuote,
            'app-quote-grid': QuoteGrid
        }
    }
</script>

<style>
    p {
        font-weight: bold;
    }
</style>
