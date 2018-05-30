<template>
  <div class="wrapper">
    <!-- <notifications></notifications> -->
    <!-- TODO: notifications -->
    <side-bar class="sidebar"/>
    <div class="main-panel">
      <top-navbar />

      <dashboard-content />

      <content-footer v-if="!$route.meta.hideFooter" />
    </div>
  </div>
</template>
<style lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    .sidebar {
      width: 260px;
    }
    .main-panel {
      flex: 1;
    }
  }
</style>
<script>
import SideBar from '@/components/Sidebar/SideBar'
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    SideBar,
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
