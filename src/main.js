import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routes/'
import store from '@/store/'
import axios from 'axios'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import config from '@/config'
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base,
    secondary: colors.grey.lighten3,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
Vue.prototype.$http = axios;
Vue.prototype.$config = config;
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
