import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/';
import store from '@/store/';
import axios from 'axios';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import config from '@/config';
import constant from '@/constants';
import filters from '@/utils/filter';
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base,
    secondary: colors.grey.lighten3,
    accent: colors.shades.black,
    error: colors.red.accent2
  }
});
Vue.prototype.$http = axios;
Vue.prototype.$config = config;
Vue.prototype.$constant = constant;
import ProjectConfig from './config';
Vue.prototype.$scout = ProjectConfig;
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/scss/style.scss';
Vue.config.productionTip = false;
Vue.filter('enterpriseNature', filters.enterprise.nature);
Vue.filter('enterpriseStatus', filters.enterprise.status);
Vue.filter('enterpriseCheckStatus', filters.enterprise.checkStatus);
Vue.filter('enterpriseLogScoreFilterType', filters.enterprise.logScoreFilterType);
Vue.filter('constantHelper', filters.constantHelper);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
