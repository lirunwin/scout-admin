<template lang="html">
  <v-container>
    <toolbar :title="detail.comname"></toolbar>
    <v-tabs
      class="mt-3"
      v-model="tabActive"
      color="primary"
      dark
      grow
      slider-color="primary darken-2"
      >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
      >
       {{ tab.label }}
      </v-tab>
      <v-tab-item>
        <enterprise-profile :detail="detail"></enterprise-profile>
      </v-tab-item>
      <v-tab-item>
        <score-log></score-log>
      </v-tab-item>
      <v-tab-item>
        <balance-log></balance-log>
      </v-tab-item>
      <v-tab-item>
        <info-change-log></info-change-log>
      </v-tab-item>
      <v-tab-item>
        <comments></comments>
      </v-tab-item>
      <v-tab-item>
        <comments></comments>
      </v-tab-item>
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
    text: '1',
    tabActive: null,
    detailA: {
      "comd": null,
      "comname": "宇宙武器公司",
      "userid": "22222222",
      "accountnum": "18231231156",
      "nature": "COM_NATURE_1",
      "businesslevel": "2",
      "contactsname": "啊阿斯顿",
      "contactstel": "123213213",
      "provinceid": "1",
      "provincename": " 四川",
      "cityid": "2",
      "cityname": "成都",
      "countyid": "3",
      "countyname": "青羊区",
      "address": "玉林路12号",
      "comstatus": "COMP_STATUS_CHANGE",
      "marginmoney": 123213213,
      "reputation": "1.00",
      "parttimenum": 1,
      "practicenum": 2,
      "totalnum": 3,
      "createtime": "2018-06-11",
      "lastupdatetime": null,
      "officephone": "12735462734",
      "comemial": "yunzhou@kill.com",
      "introduce": "杀一儆百",
      "businessLicensefile": "123213213213"
    }
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
        enterprise.id === this.$route.params.id ||
        enterprise.accountnum === this.$route.params.accountnum
      )
      return detail || this.detailA;
    }
  },
  methods: {
    ...mapActions(['getAllEnterprises']),
  }
}
</script>

<style lang="css">
</style>
