new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result(){
            if (Number(this.value) === 37) return 'done';
            else return 'not there yet';
        }
    },
    watch: {
        // 監控result property
        result(){
            setTimeout(() => {
                this.value = 0;
            }, 5000);
        }
    }
});