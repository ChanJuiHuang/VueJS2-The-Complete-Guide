const data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

const vm1 = new Vue({
    // el: '#app1',
    data: data,
    methods: {
        show(){
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle(title){
            this.title = title;
        }
    },
    computed: {
        lowercase(){
            return this.title.toLowerCase();
        }
    },
    watch: {
        title(value){
            // alert('Title changed, new value: ' + value);
        }
    }
});

vm1.$mount('#app1');

console.log(vm1.$data === data);


vm1.$refs.heading.innerText = 'Something else...';

setTimeout(function() {
    vm1.title = 'Changed by Timer';
    vm1.show();
}, 1000);

const vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The Second Instance',
    },
    methods: {
        onChange(){
            vm1.title = 'Changed!';
        }
    }
});

const vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});

/* mount-method*/
// method-1
// vm3.$mount('#app3'); // it will replace element of #app3

// method-2
vm3.$mount(); // auto mount to unmount vue instance's template ot render function
document.getElementById('app3').appendChild(vm3.$el);