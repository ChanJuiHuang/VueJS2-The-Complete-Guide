const cmp = {
    data(){
        return {status: 'Critical'};
    },
    template: '<p>Server Status: {{ status }}(<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus(){
            this.status = 'Normal';
        }
    }
};

new Vue({
    el: '#app1',
    components: {
        'my-cmp': cmp
    }
});

new Vue({
    el: '#app2', 
});