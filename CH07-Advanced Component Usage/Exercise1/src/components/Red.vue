<template>
    <div>
        <slot name="title"></slot>
        <slot name="content"></slot>
        {{ color }}
    </div>
</template>

<script>
    export default {
        props: {
            color: String
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>