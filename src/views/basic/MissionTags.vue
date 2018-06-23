<template lang="html">
  <v-container fluid>
    <toolbar :title="$route.meta.title"></toolbar>
    <v-btn
      color="primary"
      class="mt-3"
      @click="newTag">
      新增{{$route.meta.title}}
    </v-btn>
    <v-tooltip
      bottom
      v-show="selectedTags.length"
      >
      <v-btn slot="activator" icon class="mt-2 mb-0" @click="multiDeprecate">
        <v-icon color="error">delete</v-icon>
      </v-btn>
      <span>批量废弃{{selectedTags.length}}个项目</span>
    </v-tooltip>
    <data-filter
      :type="tagTypes"
      v-model="filter"
      @search="search"
    ></data-filter> {{filter}} {{pagination}}
    <v-dialog v-model="dialog"
      persistent
      max-width="400px">
      <v-card>
        <v-card-title class="pb-0">
          <span class="headline">{{!tag.id? `新增${$route.meta.title}` : `修改${$route.meta.title}`}}</span>
          <v-spacer></v-spacer>
          <v-btn color="secondary darken-3"
            @click="closeDialog"
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
                <v-text-field name="name"
                  label="名称"
                  v-model="tag.name"></v-text-field>
              </v-flex>
              <v-flex xs12
                class="py-0">
                <v-text-field name="name"
                  label="业务类"
                  v-model="tag.business"></v-text-field>
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
            :loading="dialogBtnLoading"
            :disable="dialogBtnLoading"
            @click="saveTag()">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container fluid class="py-0">
      <v-data-table
        v-model="selectedTags"
        :headers="tableHeaders"
        :items="availableMissionTags"
        no-data-text="未查询到数据..."
        no-results-text="无筛选结果"
        :rows-per-page-items= "$constant.global.tablePagination"
        rows-per-page-text="每页显示"
        disable-initial-sort
        class="elevation-1"
        :pagination.sync="pagination"
        select-all
        :loading="tableLoading"
        >
        <template slot="headers" slot-scope="props">
          <tr>
            <th class="px-1">
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                color="primary"
                hide-details
                @click="toggleSelectAll"
              ></v-checkbox>
            </th>
            <th
              v-for="header in props.headers"
              :key="header.text"
              style="text-align:left"
            >
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click.stop="props.selected = !props.selected">
            <td class="px-1">
              <v-checkbox
                :input-value="props.selected"
                color="primary"
                hide-details
              ></v-checkbox>
            </td>
            <td v-for="index of tableHeaders.length"
              :key="index"
              :class="{
                'justify-start layout px-0': tableHeaders[index-1].action
              }"
              >
              <template v-if="tableHeaders[index-1].action">
                <v-tooltip bottom>
                  <v-btn slot="activator" icon class="mx-0" @click.stop="editTag(props.item)">
                    <v-icon color="primary">edit</v-icon>
                  </v-btn>
                  <span>修改</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn slot="activator" icon class="mx-0" @click.stop="deprecateItem(props.item)">
                    <v-icon color="error">delete</v-icon>
                  </v-btn>
                  <span>废弃</span>
                </v-tooltip>
                <v-switch color="primary"
                  @click.stop="switchStatus(props.item)"
                  hide-details
                  :true-value="status.on.value"
                  :false-value="status.off.value"
                  class="pl-2"
                  style="flex-grow: 0"
                  :input-value="props.item[tableHeaders[index-1].value]">
                </v-switch>
              </template>
              <template v-else-if="tableHeaders[index-1].constant && tableHeaders[index-1].constant[0]">
                {{ props.item[tableHeaders[index-1].value] | constantHelper(tableHeaders[index-1].constant[1])}}
              </template>
              <template v-else>
                {{ props.item[tableHeaders[index-1].value] }}
              </template>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
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
    },
    tableLoading: false,
    dialogBtnLoading: false,
    selectedTags: [],
    title: '任务标签'
  }),
  watch: {
    pagination: {
      handler(newValue, oldValue) {
        if (newValue.page > oldValue.page) {
          let totalItems = newValue.totalItems;
          let rowsPerPage = newValue.rowsPerPage;
          let totalPages = Math.ceil(totalItems / rowsPerPage);
          if (totalPages === newValue.page + 1) {
            this.filter.pageindex += 1;
            this.getData(this.filter);
          }
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(['missionTags']),
    availableMissionTags() {
      return this.missionTags.filter(tag => tag.status !== this.status.deprecated.value);
    },
    constant() {
      return this.$constant.basic;
    },
    tagTypes() {
      return this.$constant.global.jobType
    },
    dataStatus() {
      return this.$constant.global.dataStatus
    },
    status() {
      return {
        on: this.dataStatus.find(status => status.name === 'able'),
        off: this.dataStatus.find(status => status.name === 'disable'),
        deprecated: this.dataStatus.find(status => status.name === 'deprecated')
      }
    },
    tableHeaders() {
      return this.constant.missionTagTableHeaders
    }
  },
  methods: {
    ...mapActions([
      'getMissionTags',
      'addOrUpdataMissionTag',
      'updataMissionTagStatus',
      'resetMissionTags'
    ]),
    newTag() {
      this.tag.status = this.status.off.value;
      this.dialog = true;
    },
    resetForm() {
      this.tag = {}
    },
    saveTag(tag = this.tag) {
      this.dialogBtnLoading = true;
      this.addOrUpdataMissionTag(tag)
        .then(() => {
          this.closeDialog();
          this.dialogBtnLoading = false;
        })
        .catch(error => this.dialogBtnLoading = false);
    },
    getFirstPage() {
      this.filter = {
        pageindex: this.pagination.page,
        pagesize: this.pagination.rowsPerPage * 2 + 1
      }
      this.getData(this.filter);
    },
    editTag(item) {
      // this.tag = Object.assign({}, item);
      this.tag = item;
      this.dialog = true;
    },
    deprecateItem(item) {
      this.updataMissionTagStatus({
        ids: [item.id],
        status: this.status.deprecated.value
      });
    },
    multiDeprecate() {
      let ids = this.selectedTags.map(tag => tag.id);
      this.updataMissionTagStatus({
        ids,
        status: this.status.deprecated.value
      });
    },
    closeDialog() {
      this.dialog = false;
      setTimeout(() => {
        this.resetForm();
      }, 300)
    },
    switchStatus(item) {
      // let tag = Object.assign({}, item);
      let tag = item;
      let on = this.status.on.value;
      let off = this.status.off.value;
      tag.status === on ? tag.status = off : tag.status = on;
      this.saveTag(tag);
    },
    toggleSelectAll() {
      if (this.selectedTags.length) this.selectedTags = []
      else this.selectedTags = this.missionTags.slice()
    },
    search() {
      let rows = this.pagination.rowsPerPage;
      if (rows < 0) rows = 99999;
      this.filter.pageindex = 1;
      this.filter.pagesize = rows * 2 + 1;
      this.getData(this.filter);
    },
    getData(params) {
      this.tableLoading = true;
      this.getMissionTags(params)
        .then(() => this.tableLoading = false)
        .catch(() => this.tableLoading = false)
    }
  },
  mounted() {
    this.getFirstPage();
    // Array(10)
    //   .fill('')
    //   .map((v, i) => {
    //     this.saveTag({
    //       "name": `下属${i}`,
    //       "sort": "1",
    //       "business": "标签业务",
    //       "status": "DATA_NORMAL"
    //     })
    //   });

  }
}
</script>
