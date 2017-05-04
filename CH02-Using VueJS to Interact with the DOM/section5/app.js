new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'gray',
        width: 100
    },
    computed: {
        divClasses(){
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
});