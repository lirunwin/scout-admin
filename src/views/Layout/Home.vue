<template>
<div class="wrapper">
  <v-app>
    <side-bar :toggleDrawer="drawer" @toggleDrawer="drawerToggled"/>
    <top-navbar @toggleDrawer="drawer = !drawer"/>
    <v-content>
      <dashboard-content/>
    </v-content>
    <v-footer app inset>
      {{drawer}}
      <app-footer />
    </v-footer>
  </v-app>
</div>
</template>
<script>
import SideBar from './SideBar'
import TopNavbar from './TopNavbar'
import AppFooter from './AppFooter'
import DashboardContent from './Content'

export default {
  components: {
    SideBar,
    TopNavbar,
    DashboardContent,
    AppFooter
  },
  data:() => ({
    drawer: true
  }),
  methods: {
    drawerToggled(val) {
      this.drawer = val
    }
  }
}
</script>

<style lang="scss">
</style>
