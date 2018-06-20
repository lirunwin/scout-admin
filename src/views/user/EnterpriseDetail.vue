<template lang="html">
  <div>router:</div>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'detail',
  data: () => ({
    detail: {
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
    enterpriseDetail() {
      let detail = this.enterprises.find(enterprise =>
        enterprise.id === this.$route.params.id ||
        enterprise.accountnum === this.$route.params.accountnum
      )
      return detail;
    }
  }
}
</script>

<style lang="css">
</style>
