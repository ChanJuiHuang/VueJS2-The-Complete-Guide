<template>
    <div>
        <strong><p>Use getters</p></strong>
        <p>Counter is: {{ counter }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.getters['counter/doubleCounter'];
            }
        }
    }
</script>