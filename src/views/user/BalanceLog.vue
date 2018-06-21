<template lang="html">
  <v-container
    v-if="tableHeaders"
    fluid
    >
    <v-layout row wrap>
      <v-flex xs4>
        <v-select
          :items="filters"
          v-model="filter.type"
          item-text="label"
          item-value="value"
          label="筛选条件"
          @change="query"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-data-table
      :headers="tableHeaders"
      :items="balanceLog"
      no-data-text="未查询到数据..."
      no-results-text="无筛选结果"
      rows-per-page-text="每页显示"
      :rows-per-page-items='[5,10,25,{"text":"全部","value":-1}]'
      disable-initial-sort
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td v-for="index of tableHeaders.length" :key="index">
          <template v-if="tableHeaders[index-1].constant && tableHeaders[index-1].constant[0]">
              {{ props.item[tableHeaders[index-1].value] | enterpriseLogScoreFilterType }}
          </template>
          <template v-else>
            {{ props.item[tableHeaders[index-1].value] }}
          </template>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    filter: {}
  }),
  computed: {
    ...mapGetters(['balanceLog', 'getAllEnterprises']),
    constant() {
      return this.$config.constant.user.enterprise;
    },
    tableHeaders() {
      return this.constant.logBalanceTableHeaders;
    },
    filters() {
      return this.constant.logBanlanceFilters;
    }
  },
  methods: {
    ...mapActions(['getBalanceLog']),
    getDefaultOrderBy() {
      let defaultOrder = this.constant.score.orderBy.find(order => order.default === true);
      if (defaultOrder) {
        return defaultOrder.value;
      } else {
        return 'createtime';
      }
    },
    query() {

    }
  },
  mounted() {
    this.getBalanceLog({
      comid: this.$route.params.id,
      pageindex: 1,
      pagesize: 100
    });
  }
}
</script>
