<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // props: {
        //     id: {type: String}
        // },
        // data(){
        //     return {
        //         id: this.$route.params.id
        //     };
        // },
        methods: {
            navigateToHome(){
                console.log(this.$route);
                this.$router.push({name: 'home'});
            }
        },
        // watch: {
        //     $route(to, from){
        //         // console.log(to, from);
        //         this.id = to.params.id;
        //     }
        // }
    }
</script>