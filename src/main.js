import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://192.168.10.10/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
