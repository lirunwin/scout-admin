import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard';
import Login from '@/views/Login';
import Permission from '@/views/Permission';
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        hideSidebar: true,
        hideTopNavbar: true
      }
    },
    {
      path: '/permission',
      name: 'permission',
      component: Permission
    }
  ]
})
