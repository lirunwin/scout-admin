<template lang="html">
  <v-container fluid class="px-0 info-change-log" grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 lg6 v-for="log in infoChangeLog" :key="log.comid">
        <v-card>
          <v-card-title>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex>
                  更新时间：{{ log.createtime }}
                </v-flex>
                <v-flex class="text-xs-right">
                  {{ log.comstatus | enterpriseStatus }}
                </v-flex>
              </v-layout>
              <v-divider class="my-2"></v-divider>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      企业名称：
                    </v-flex>
                    <v-flex>
                      {{ log.comname }}
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      联系人：
                    </v-flex>
                    <v-flex class="pr-0">
                      {{ log.contactsname }}
                    </v-flex>
                    <v-flex class="pl-0">
                      {{ log.contactstel }}
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      所在地区：
                    </v-flex>
                    <v-flex>
                      {{ log.provincename + log.cityname}}
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      办公电话：
                    </v-flex>
                    <v-flex>
                      {{ log.officephone }}
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      公司性质：
                    </v-flex>
                    <v-flex>
                      {{ log.nature | enterpriseNature}}
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      公司地址：
                    </v-flex>
                    <v-flex>
                      {{ log.address }}
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      Email：
                    </v-flex>
                    <v-flex>
                      {{ log.comemial}}
                    </v-flex>
                  </v-layout>
                  <v-layout row align-center>
                    <v-flex class="text-xs-right info-item">
                      营业执照：
                    </v-flex>
                    <v-flex class="py-0">
                      <v-btn color="primary" outline small round class="my-0" @click="onShowImg(log.businessLicensefile)">查看</v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <v-layout row>
                    <v-flex class="text-xs-right info-item">
                      公司简介：
                    </v-flex>
                    <v-flex>
                      {{ log.introduce }}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="showReviewDialog = true">审核</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showImg" max-width="90%">
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon color="secondary darken-3" @click="showImg = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-container grid-list-xs>
            <v-layout row wrap justify-center>
              <img :src="image" class="mx">
            </v-layout>
          </v-container>
        </v-card-title>
      </v-card>
    </v-dialog>
    <review-dialog :show="showReviewDialog"></review-dialog>
  </v-container>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex';
import ReviewDialog from '@/components/ReviewDialog';
export default {
  components: {
    ReviewDialog
  },
  data: () => ({
    showImg: false,
    showReviewDialog: false,
    image: ''
  }),
  computed: {
    ...mapGetters(['infoChangeLog']),
  },
  methods: {
    ...mapActions(['getInfoChangeLog']),
    onShowImg(src) {
      this.image = src;
      this.showImg = true;
    }
  },
  mounted() {
    this.getInfoChangeLog({
      comid: '1528708466833525'
    })
  }
}
</script>
<style lang="scss">
.info-change-log {
    .info-item {
        flex: 0 0 6em;
    }
}
</style>
