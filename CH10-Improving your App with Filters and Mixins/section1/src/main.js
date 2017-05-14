import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowerCase', (value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created(){
    console.log('this is the global mixin');
  }
});

let vm = new Vue({
  el: '#app',
  render: h => h(App)
})
console.log(vm);