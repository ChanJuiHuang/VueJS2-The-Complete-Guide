<template>
    <div>
        <h1>The New</h1>
        <button @click="counter += 1">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                counter: 0
            };
        },
        destroyed(){
            console.log('Destroyed!');
        },
        activated(){
            console.log('activated!');
        },
        deactivated(){
            console.log('deactivated!');
        }
    }
</script>
