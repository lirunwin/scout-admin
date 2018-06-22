<template lang="html">
  <v-container fluid v-if="detail">
    <toolbar :title="detail.comname"></toolbar>
    <v-tabs
      class="mt-3"
      v-model="tabActive"
      color="primary"
      dark
      slider-color="primary darken-2"
      >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        class="px-5"
      >
       {{ tab.label }}
      </v-tab>
      <v-tab-item>
        <enterprise-profile :detail="detail"></enterprise-profile>
      </v-tab-item>
      <v-tab-item>
        <score-log></score-log>
      </v-tab-item>
      <!-- <v-tab-item>
        <balance-log></balance-log>
      </v-tab-item> -->
      <v-tab-item>
        <info-change-log></info-change-log>
      </v-tab-item>
      <!-- <v-tab-item>
        <comments></comments>
      </v-tab-item>
      <v-tab-item>
        <comments></comments>
      </v-tab-item> -->
    </v-tabs>
    <pre>{{detail}}</pre>
  </v-container>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import EnterpriseProfile from './EnterpriseProfile';
import ScoreLog from './ScoreLog';
import BalanceLog from './BalanceLog';
import InfoChangeLog from './InfoChangeLog';
import Comments from './Comments';

import {
  mapGetters,
  mapActions
} from 'vuex';
export default {
  name: 'detail',
  components: {
    Toolbar,
    EnterpriseProfile,
    ScoreLog,
    BalanceLog,
    InfoChangeLog,
    Comments
  },
  data: () => ({
    tabActive: "0",

  }),
  computed: {
    ...mapGetters(['enterprises']),
    constant() {
      return this.$config.constant.user.enterprise;
    },
    tabs() {
      return this.constant.tabs;
    },
    detail() {
      let detail = this.enterprises.find(enterprise =>
        enterprise.comid === this.$route.params.id
      )
      return detail;
    }
  },
  mounted() {
    if (this.enterprises.length === 0) {
      this.getAllEnterprises();
    }
  },
  methods: {
    ...mapActions(['getAllEnterprises']),
  }
}
</script>

<style lang="css">
</style>
