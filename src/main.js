import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routes/'
import store from '@/store/'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import ProjectConfig from './config'
Vue.prototype.$scout = ProjectConfig
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/assets/scss/style.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
