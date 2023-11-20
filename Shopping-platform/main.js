import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import './uni.promisify.adaptor'
import { myRuquest } from 'util/api.js'


Vue.prototype.$myRuquest = myRuquest

Vue.config.productionTip = false
import store from 'store/index.js'
Vue.prototype.$store = store;
// import store from './pages/store/index.js'
// Vue.prototype.$store = store

App.mpType = 'app'
const app = new Vue({
	
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia';
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
	Pinia, // 此处必须将 Pinia 返回
  }
}
// #endif