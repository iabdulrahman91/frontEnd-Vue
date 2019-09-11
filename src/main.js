import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import store from '@/store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://backend.test/api/';
axios.defaults.headers.post['Content-Type'] = 'text/plain';
axios.defaults.headers.post['Accept'] = 'application/json';


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
