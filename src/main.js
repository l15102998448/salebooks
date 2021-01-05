// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
// 引入公用样式
import './assets/scss/style.scss'
// 引入全局bus
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
