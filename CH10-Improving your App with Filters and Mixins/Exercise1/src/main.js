import Vue from 'vue'
import App from './App.vue'

Vue.filter('addTextLength', (value) => {
    return `${value} (${value.length})`;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
