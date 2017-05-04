new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output(){
            console.log('Computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        counter(value){ // value是vue預設會傳入被監控的data，這邊會傳入counter的value
            console.log('Watch');
            setTimeout(() => {
                this.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result(){
            console.log('Methods');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }    
});