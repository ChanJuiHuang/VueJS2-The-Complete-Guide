import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

const vm = new Vue({
  store,
  el: '#app',
  render: h => h(App)
});

console.log(vm);
