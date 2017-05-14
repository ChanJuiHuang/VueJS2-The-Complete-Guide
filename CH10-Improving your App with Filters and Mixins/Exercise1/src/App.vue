<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>text: {{ text }}</p>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>EX1: {{ text | textReverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>EX2: {{ text | addTextLength }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>EX3-1: {{ textReverseOfComputed }}</p>
                <p>EX3-2: {{ addTextLengthOfComputed }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>EX4: {{ addTextLengthMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { addTextLengthMixin } from './addTextLengthMixin.js';
    export default {
        data(){
            return {
                text: 'Hi there^^'
            };
        },
        filters: {
            textReverse(value){
                return value.split('').reverse().join('');
            }
        },
        mixins: [addTextLengthMixin],
        computed: {
            textReverseOfComputed(){
                return this.text.split('').reverse().join('');
            },
            addTextLengthOfComputed(){
                return `${this.text} (${this.text.length})`;
            }
        }
    }
</script>
