// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n/i18n'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
axios.interceptors.request.use(function (config) {
  console.log("real request url ==> ", config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  console.log(response)

  return response;
}, function (error) {
  return Promise.reject(error);
});
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
