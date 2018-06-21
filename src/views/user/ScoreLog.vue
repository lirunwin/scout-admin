<template lang="html">
  <v-container
    v-if="tableHeaders"
    fluid
    >
    <v-data-table
      :headers="tableHeaders"
      :items="scoreLog"
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
1
          </template>
          <template v-else-if="tableHeaders[index-1].detail">
            <router-link :to="{ name: 'EnterpriseDetail', params: { id: props.item.comid || 0, accountnum: props.item.accountnum  } }">
                {{ props.item[tableHeaders[index-1].value] }}
            </router-link>
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

  }),
  computed: {
    ...mapGetters(['scoreLog']),
    constant() {
      return this.$config.constant.user.enterprise
    },
    tableHeaders() {
      return this.constant.log.score.tableHeaders
    }
  },
  methods: {
    ...mapActions(['getScoreLog']),
    getDefaultOrderBy() {
      let defaultOrder = this.constant.score.orderBy.find(order => order.default === true);
      if (defaultOrder) {
        return defaultOrder.value;
      } else {
        return 'createtime';
      }
    },
  },
  mounted() {
    this.getScoreLog({
      comid: this.$route.params.id,
      pageindex: 1,
      pagesize: 100
    });
  }
}
</script>
