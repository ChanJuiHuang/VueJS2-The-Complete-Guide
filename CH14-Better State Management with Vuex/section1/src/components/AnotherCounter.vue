<template>
    <div>
        <p>Actions</p>
        <button class="btn btn-primary" @click="increment(50)">Increment</button>
        <button class="btn btn-primary" @click="decrement(20)">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by: 10, delay: 1000})">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 10, delay: 1000})">Async Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('counter', [
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement',
            ]),
        }
    }
</script>
