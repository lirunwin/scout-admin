<template lang="html">
<div class="permission">
  <v-container fluid>
    <v-toolbar light color="secondary" flat>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>企业用户</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
  <v-container
    class="py-0"
    :fluid="$vuetify.breakpoint.mdAndUp"
    v-bind="{[`grid-list-${$vuetify.breakpoint.name}`]: true }"
    >
    <v-layout row wrap align-center>
      <v-flex xs6 md2>
        <v-select
          :items="constant.status"
          item-text="label"
          item-value="value"
          v-model="filter.comstatus"
          label="企业状态"
        ></v-select>
      </v-flex>
      <v-flex xs6 md2>
        <v-select
          :items="constant.level"
          item-text="label"
          item-value="value"
          v-model="filter.businesslevel"
          label="企业等级"
        ></v-select>
      </v-flex>
      <v-flex xs12 md4>
        <v-text-field
          name="name"
          label="关键词"
          v-model="filter.paramlike"
          id="id"
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-select
          :items="constant.orderBy"
          item-text="label"
          item-value="value"
          v-model="filter.ordercondition"
          label="排序"
        ></v-select>
      </v-flex>
      <v-flex style="flex:0" class="pb-2 px-0"><v-btn color="primary" class="mb-3" @click="search">搜索</v-btn></v-flex>
      <v-flex style="flex:0" class="pb-2 px-0"><v-btn color="primary lighten-1" class="mb-3" @click="resetSerach">重置</v-btn></v-flex>
    </v-layout>
    {{filter}}
  </v-container>
  <v-container fluid class="py-0" v-if="enterprises">
    <v-data-table
      :headers="tableHeaders"
      :items="enterprises"
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
            {{ getStatusLabelByConstVal(props.item[tableHeaders[index-1].value],tableHeaders[index-1].constant[1]) }}
          </template>
          <template v-else-if="tableHeaders[index-1].detail">
            <router-link :to="{ name: 'EnterpriseDetail', params: { id: props.item.comid || '#' } }">
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
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'enterprise',
  data() {
    return {
      status: '',
      level: '',
      orderBy: '',
      keyword: '',
      filter: {
        comstatus: '',
        businesslevel: '',
        paramlike: '',
        ordercondition: '',
        pageindex: 1,
        pagesize: 100
      }
    }
  },
  computed: {
    ...mapGetters(['enterprises']),
    constant() {
      return this.$config.constant.user.enterprise
    },
    tableHeaders() {
      return this.constant.tableHeaders;
    }
  },
  methods: {
    ...mapActions(['getAllEnterprises']),
    addPermission() {
      this.dialog = true
    },
    getStatusLabelByConstVal(val, property) {
      let constantObj = this.constant[property];
      if (!constantObj) {
        return val
      }
      let constant = constantObj.find(constant => constant.value === val);
      return constant.label || val;
    },
    search() {
      this.getAllEnterprises(this.filter);
    },
    getDefaultOrderBy() {
      let defaultOrder = this.constant.orderBy.find(order => order.default === true);
      return defaultOrder.value || 'createtime';
    },
    resetSerach() {
      this.filter = {
        comstatus: '',
        businesslevel: '',
        paramlike: '',
        ordercondition: '',
        pageindex: 1,
        pagesize: 100
      }
    }
  },
  mounted() {
    this.getAllEnterprises({
      pageindex: 1,
      pagesize: 100,
      ordercondition: this.getDefaultOrderBy()
    });
  }
}
</script>

<style lang="scss">
</style>
