<template lang="html">
  <v-container class="enterprise" v-if="detail" fluid>
    <v-layout row wrap class="pb-3">
      <v-btn color="primary" @click="dialogForForm = !dialogForForm">修改</v-btn>
      <v-btn color="primary" @click="dialogForReview = !dialogForReview">审核</v-btn>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs7>
        <div class="info-item">
          <div>企业等级</div>
          <div>{{ detail.businesslevel }}</div>
        </div>
        <div class="info-item">
          <div>联系人</div>
          <div>{{ detail.contactsname }}</div>
        </div>
        <div class="info-item">
          <div>Email</div>
          <div>{{ detail.comemail }}</div>
        </div>
        <div class="info-item">
          <div>所在地区</div>
          <div>{{ detail.provincename + detail.countyname }}</div>
        </div>
        <div class="info-item">
          <div>详细地址</div>
          <div>{{ detail.address }}</div>
        </div>
        <div class="info-item">
          <div>办公电话</div>
          <div>{{ detail.contactstel }}</div>
        </div>
        <div class="info-item">
          <div>公司性质</div>
          <div>{{ detail.nature | enterpriseNature }}</div>
        </div>
        <div class="info-item">
          <div>创建时间</div>
          <div>{{ detail.createtime }}</div>
        </div>
        <div class="info-item">
          <div>更新时间</div>
          <div>{{ detail.createtime }}</div>
        </div>
        <div class="info-item">
          <div>企业状态</div>
          <div>{{ detail.comstatus | enterpriseStatus }}</div>
        </div>
        <div class="info-item">
          <div>企业信誉</div>
          <div>{{ detail.reputation }}</div>
        </div>
        <div class="info-item">
          <div>保证金</div>
          <div>{{ detail.marginmoney }}</div>
        </div>
        <div class="info-item">
          <div>公司简介</div>
          <div>{{ detail.businesslevel }}</div>
        </div>
      </v-flex>
      <v-flex xs5>
        <!-- <img src="http://img3.jc001.cn/img/544/1737544/1601/16569ca42a785ff.jpg"> -->
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="dialogForForm" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline"> {{detail.comname}}</span>
            <v-spacer></v-spacer>
            <v-btn color="secondary darken-3" icon
              @click="dialogForForm = false"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-select
                    :items="constant.level"
                    item-text="label"
                    item-value="value"
                    v-model="detailForm.businesslevel"
                    label="等级"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="名称"
                    v-model="detailForm.comname"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select
                    :items="constant.nature"
                    item-text="label"
                    item-value="value"
                    v-model="detailForm.comnae"
                    label="性质"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="联系人"
                    v-model="detailForm.contactsname"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="电话"
                    v-model="detailForm.contactstel"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <city-selector v-model="location"></city-selector>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        label="详细地址"
                        v-model="detailForm.address"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="办公电话"
                    v-model="detailForm.officephone"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Email"
                    v-model="detailForm.email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <image-uploader v-model="detailForm.businesslicensefile"></image-uploader>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="公司简介"
                    multi-line
                    v-model="detailForm.introduce"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.native="dialogForForm = false">关闭</v-btn>
            <v-btn color="primary" @click.native="updateEnterpriseInfo">确定</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <review-dialog v-model="dialogForReview" @onReview="onReviewEnterprise"></review-dialog>
    <pre>
      {{detailForm}}
    </pre>
  </v-container>
</template>

<script>
import CitySelector from '@/components/CitySelector';
import ImageUploader from '@/components/ImageUploader';
import ReviewDialog from '@/components/ReviewDialog';
import {
  mapActions
} from 'vuex';
export default {
  components: {
    CitySelector,
    ImageUploader,
    ReviewDialog
  },
  props: ['detail'],
  data: () => ({
    dialogForForm: false,
    dialogForReview: false,
    location: {},
    review: {
      checkstatus: false,
      remark: ''
    },
    detailForm: {},
  }),
  computed: {
    constant() {
      return this.$config.constant.user.enterprise
    },
    checkConstant() {
      let constants = this.constant.checkStatus;
      let pass = constants.find(constant => constant.alias === 'pass');
      let reject = constants.find(constant => constant.alias === 'reject');
      return {
        pass,
        reject
      }
    }
  },
  mounted() {
    this.detailForm = Object.assign({}, this.detail);
    this.location = {
      province: this.detailForm.provinceid,
      city: this.detailForm.cityid,
      county: this.detailForm.countyid
    }
  },
  methods: {
    ...mapActions(['reviewEnterprise', 'updataEnterpriseInfo']),
    onReviewEnterprise(review) {
      this.review.id = this.$route.params.id;
      this.review.checkstatus = review.pass;
      this.review.remark = review.note;
      this.reviewEnterprise(this.review);
    },
    updateEnterpriseInfo() {
      let info = {
        id: this.detailForm.comid,
        comname: this.detailForm.comname,
        nature: this.detailForm.nature,
        businesslevel: this.detailForm.businesslevel,
        comemial: this.detailForm.comemial,
        contactsname: this.detailForm.contactsname,
        contactstel: this.detailForm.contactstel,
        provinceid: this.location.province,
        cityid: this.location.city,
        countyid: this.location.county,
        address: this.detailForm.address,
        officephone: this.detailForm.officephone,
        businesslicensefile: this.detailForm.businesslicensefile,
        introduce: this.detailForm.introduce
      }
      // this.detailForm.rovinceid = this.location.province;
      // this.detailForm.cityid = this.location.city;
      // this.detailForm.countyid = this.location.county;
      this.updataEnterpriseInfo(info);
    }
  }
}
</script>
<style lang="scss">
.enterprise {
    .info-item {
        display: flex;
        align-items: center;
        & > div {
            flex: 1;
            padding: 0.25em 0;
        }
        & > div:first-child {
            flex: 0 0 6em;
            text-align: right;
            &::after {
                content: "：";
            }
        }
    }
}
</style>
