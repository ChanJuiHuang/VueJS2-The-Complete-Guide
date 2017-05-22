<template>
    <div>
        <p>mutations</p>
        <button class="btn btn-primary" @click="increment(50)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations('counter', ['increment', 'decrement']),
        }
    }
</script>