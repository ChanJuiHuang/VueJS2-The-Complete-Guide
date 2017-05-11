<template>
    <div class="row">
        <form>
            <div class="col-md-12">
                <div class="col-md-6 col-md-offset-3 form-group">
                    <label>Quote</label>
                    <textarea class="form-control" rows="3" v-model="quote"></textarea>
                </div>
                <div class="col-md-6 col-md-offset-3 form-group">
                    <button
                        type="button"
                        class="btn btn-lg btn-primary"
                        @click.prevent="addQuote">
                        Add Quote</button>
                </div>  
            </div>            
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                quote: '',
            };
        },
        methods: {
            addQuote(){
                this.$emit('addQuote', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>
    button {
        font-weight: bold;
        display: block;
        margin: auto;
    }
</style>