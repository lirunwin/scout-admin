<template lang="html">
  <v-container class="enterprise" v-if="detail">
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
          <div>{{ detail.businesslevel }}</div>
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
        <img src="http://img3.jc001.cn/img/544/1737544/1601/16569ca42a785ff.jpg">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['detail']
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
