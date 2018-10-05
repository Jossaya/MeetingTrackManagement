import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const VueSplit = require('vue-split-panel');
Vue.use(VueSplit);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
