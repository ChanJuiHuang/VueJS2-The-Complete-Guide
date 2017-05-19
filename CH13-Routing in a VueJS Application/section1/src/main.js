import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition){
      console.log(savedPosition);
      return savedPosition;
    }
    if (to.hash) {
      console.log(to.hash);
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

router.afterEach((to, from) => {
  console.log('global afterEach');
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
