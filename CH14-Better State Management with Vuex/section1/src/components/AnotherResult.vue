<template>
    <div>
        <strong><p>Use mapGetters</p></strong>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('counter', [
                'doubleCounter',
                'stringCounter'
            ]),
        }
    }
</script>