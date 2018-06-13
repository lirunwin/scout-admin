import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routes/'
import store from '@/store/'
import axios from 'axios'
import Vuetify from 'vuetify'
// import sv from './i18n/vuetify/sv'
//
// Vue.use(Vuetify, {
//   lang: {
//     locales: { sv },
//     current: 'sv'
//   }
// })
Vue.use(Vuetify)
Vue.prototype.$http = axios
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
