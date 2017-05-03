new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://google.com',
        finishedLink: '<a href="https://google.com">Google</a>'
    },
    methods: {
        sayHello(){
            this.title = 'Hello!';
            return this.title; // this.title之所以可以使用，是因為vue使用了proxy
        }
    }
});