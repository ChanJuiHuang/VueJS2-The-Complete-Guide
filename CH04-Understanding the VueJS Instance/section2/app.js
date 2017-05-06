const vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS Instance'
    },
    methods: {
        destroy(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroyed');
    },
    destroyed(){
        console.log('destroyed');
    }
});