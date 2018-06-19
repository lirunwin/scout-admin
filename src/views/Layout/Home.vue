<template>
<div class="wrapper">
  <v-app>
    <side-bar :toggleDrawer="drawer"
      @toggleDrawer="drawerToggled"
      v-if="!$route.meta.hideSidebar" />
    <top-navbar @toggleDrawer="drawer = !drawer"
      v-if="!$route.meta.hideTopNavbar" />
    <v-content>
      <main-content />
    </v-content>
    <v-footer app
      inset>
      {{drawer}}
      <app-footer />
    </v-footer>
    <snackbar></snackbar>
    <confirm></confirm>
  </v-app>
</div>
</template>
<script>
import SideBar from './SideBar';
import TopNavbar from './TopNavbar';
import AppFooter from './AppFooter';
import MainContent from './Content';
import Snackbar from '@/components/Snackbar';
import Confirm from '@/components/Confirm';


export default {
  components: {
    SideBar,
    TopNavbar,
    MainContent,
    AppFooter,
    Snackbar,
    Confirm
  },
  data: () => ({
    drawer: false
  }),
  mounted() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp
  },
  methods: {
    drawerToggled(val) {
      this.drawer = val
    }
  }
}
</script>

<style lang="scss">
</style>
