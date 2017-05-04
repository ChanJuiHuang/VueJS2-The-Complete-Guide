new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase(step, event){
            console.log(event);
            return this.counter += step;
        },
        updateCoordinates(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe(){
            alert('Alert me!');
        }
    }
});