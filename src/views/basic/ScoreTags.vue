<template lang="html">
  <v-container fluid>
    <toolbar title="评分标签"></toolbar>
    <v-btn
      color="primary"
      class="mt-3"
      @click="newTag">
      新增标签
    </v-btn>
    <data-filter
      :type="tagTypes"
      keyword
      v-model="filter"
    ></data-filter>
    <v-dialog v-model="dialog"
      persistent
      max-width="400px">
      <v-card>
        <v-card-title class="pb-0">
          <span class="headline">{{!tag.id? '新增评分标签' : '修改评分标签'}}</span>
          <v-spacer></v-spacer>
          <v-btn color="secondary darken-3"
            @click="dialog = !dialog"
            icon>
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-0">
          <v-container grid-list-md
            class="py-0 px-0">
            <v-layout row
              align-center
              wrap>
              <v-flex xs12
                class="py-0">
                <v-select :items="tagTypes"
                  v-model="tag.etagtype"
                  item-text="label"
                  item-value="value"
                  label="类型"></v-select>
              </v-flex>
              <v-flex xs12
                class="py-0">
                <v-text-field name="name"
                  label="标签名"
                  v-model="tag.tagname"></v-text-field>
              </v-flex>
              <v-flex xs12
                class="py-0">
                <v-text-field name="name"
                  label="综合评分或难度系数"
                  type="number"
                  v-model.number="tag.tagsource"></v-text-field>
              </v-flex>
              <v-flex xs12
                class="py-0">
                <v-text-field name="name"
                  label="分值"
                  type="number"
                  v-model.number="tag.source"></v-text-field>
              </v-flex>
              <v-flex xs12
                class="py-0">
                <v-text-field name="name"
                  label="排序"
                  v-model.number="tag.sort"
                  type="number"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row
              align-center>
              <v-flex class="py-0"
                style="flex-grow: 0;">
                状态：
              </v-flex>
              <v-flex class="py-0">
                <v-switch color="primary"
                  hide-details
                  :true-value="status.on.value"
                  :false-value="status.off.value"
                  v-model="tag.status"></v-switch>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="error"
            @click="resetForm">重置</v-btn>
          <v-btn class="primary"
            @click="saveTag">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container fluid class="py-0">
      <v-data-table
        :headers="tableHeaders"
        :items="scoreTags"
        no-data-text="未查询到数据..."
        no-results-text="无筛选结果"
        rows-per-page-text="每页显示"        
        disable-initial-sort
        class="elevation-1"
        :pagination.sync="pagination"
      >
        <template slot="items" slot-scope="props">
          <td v-for="index of tableHeaders.length" :key="index">
            <template v-if="tableHeaders[index-1].constant && tableHeaders[index-1].constant[0]">
              {{ props.item[tableHeaders[index-1].value] | constantHelper(tableHeaders[index-1].constant[1])}}
            </template>
            <template v-else>
              {{ props.item[tableHeaders[index-1].value] }}
            </template>
          </td>
        </template>
      </v-data-table>
    </v-container>
    {{pagination}}
  </v-container>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import { mapActions, mapGetters } from 'vuex';
import DataFilter from '@/components/DataFilter';
export default {
  components: {
    Toolbar,
    DataFilter
  },
  data: () => ({
    filter: {},
    dialog: false,
    pagination: {},
    tag: {
      status: ''
    }
  }),
  watch: {
    pagination: {
      handler() {
        this.filter.pageindex += 1;
        this.getScoreTags(this.filter);
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(['scoreTags']),
    constant() {
      return this.$constant.basic;
    },
    tagTypes() {
      return this.constant.scoreTagTypes
    },
    dataStatus() {
      return this.$constant.global.dataStatus
    },
    status() {
      return {
        on: this.dataStatus.find(status => status.name === 'able'),
        off: this.dataStatus.find(status => status.name === 'disable'),
      }
    },
    tableHeaders() {
      return this.constant.scoreTagTableHeaders
    }
  },
  methods: {
    ...mapActions([
      'getScoreTags',
      'addOrUpdataScoreTag',
      // 'getPositions',
      // 'getSpecialTags',
      // 'getMissionTags',
      // 'getLinks',
      // 'getMetroInfo',
      // 'getCommercialDistrict'
    ]),
    newTag() {
      this.dialog = true;
    },
    resetForm() {
      this.tag = {}
    },
    saveTag() {
      this.addOrUpdataScoreTag(this.tag);
    },
    nextPage(pageObj) {
      // let total = pageObj.totalItems / pageObj.rowsPerPage;
      // let current = pageObj.page;
      // if (total - current < 1) {
      //   this.filter.pageindex += 1;
      //   this.getScoreTags(this.filter)
      // }
    },
    getFirstPage() {
      this.filter = {
        pageindex: 1,
        pagesize: 5
      }
      this.getScoreTags(this.filter);
    }
  },
  mounted() {
    this.getFirstPage();
    // this.getPositions({
    //   pageindex: '1',
    //   pagesize: '100'
    // });
    // this.getSpecialTags({
    //   pageindex: '1',
    //   pagesize: '100'
    // });
    // this.getMissionTags({
    //   pageindex: '1',
    //   pagesize: '100'
    // });
    // this.getLinks({
    //   pageindex: '1',
    //   pagesize: '100'
    // });
    // this.getMetroInfo({
    //   pageindex: '1',
    //   pagesize: '100'
    // });
    // this.getCommercialDistrict({
    //   pageindex: '1',
    //   pagesize: '100'
    // });
  }
}
</script>

<style lang="css">
</style>
