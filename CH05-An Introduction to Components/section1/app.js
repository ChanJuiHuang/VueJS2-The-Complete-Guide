// const data = {status: 'Critical'}; // data sharing

Vue.component('my-cmp', {
    data(){
        // return data; // data sharing
        return {status: 'Critical'}; // 不會有data sharing
    },
    template: '<p>Server Status: {{ status }}(<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus(){
            this.status = 'Normal';
        }
    }
});

new Vue({
    el: '#app', 
});