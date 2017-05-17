import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root= 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method === 'POST') {
    req.method = 'PUT';
  }
  next((res) => {
    res.body = 'xxx';
  });
});

// Vue.http.interceptors.push((req, next) => {
//   console.log('~~~~~~~');
//   next();
// });

// console.log(Vue.http.interceptors);

new Vue({
  el: '#app',
  render: h => h(App)
});
