<template>
<div class="permission">
  <v-container fluid>
    <v-toolbar light
      color="secondary"
      flat>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>功能模块</v-toolbar-title>
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
    <v-form ref="featureForm">
      <v-layout row
        justify-start
        class="mt-3">
        <v-dialog v-model="dialog"
          persistent
          max-width="400px">
          <v-btn slot="activator"
            color="primary"
            dark>新增模块</v-btn>
          <v-card>
            <v-card-title class="pb-0">
              <span class="headline">{{!feature.id? '新增模块' : '修改模块'}}</span>
              <v-spacer></v-spacer>
              <v-btn slot="activator"
                @click="closeDialogAndRestForm"
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
                    <v-select :items="featureParents"
                      v-model="feature.pid"
                      item-text="funname"
                      item-value="id"
                      label="请选择父级分类"></v-select>
                  </v-flex>
                  <v-flex xs12
                    class="py-0">
                    <v-text-field name="name"
                      label="模块名称"
                      :rules="rules.funname"
                      required
                      v-model="feature.funname"></v-text-field>
                  </v-flex>
                  <v-flex xs12
                    class="py-0">
                    <v-text-field name="name"
                      label="路径"
                      :rules="rules.url"
                      v-model="feature.url"></v-text-field>
                  </v-flex>
                  <v-flex xs12
                    class="py-0">
                    <v-text-field name="name"
                      label="模块代码"
                      required
                      :rules="rules.funcode"
                      v-model="feature.funcode"></v-text-field>
                  </v-flex>
                  <v-flex xs12
                    class="py-0">
                    <v-text-field name="name"
                      label="排序"
                      required
                      :rules="rules.sort"
                      v-model.number="feature.sort"
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
                      :true-value="dataStatus.on[0]"
                      :false-value="dataStatus.off[0]"
                      required
                      v-model="feature.status"></v-switch>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*为必填项</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="error"
                @click="resetFeatureForm">重置</v-btn>
              <v-btn class="primary"
                @click="saveItem">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-form>
  </v-container>
  <v-container fluid
    class="py-0">
    <v-data-table :headers="constant.tableHeaders"
      :items="sortedFeatureList"
      no-data-text="未查询到数据..."
      no-results-text="无筛选结果"
      rows-per-page-text="每页显示"
      :rows-per-page-items='[50,{"text":"全部","value":-1}]'
      disable-initial-sort
      class="elevation-1">
      <template slot="items"
        slot-scope="props"
        v-if="props.item.status !== dataStatus.deprecated[0]">
        <td
          v-for="index of constant.tableHeaders.length"
          :key="index"
          :class="{
            'justify-start layout px-0': constant.tableHeaders[index-1].value === 'action'
          }"
        >
        <template v-if="constant.tableHeaders[index-1].value === 'status'">
            <!-- {{props.item[constant.tableHeaders[index-1].value] === dataStatus.on[0]}} -->
            <v-switch
              @change="switchFeatureStatus(props.item)"
              v-model="props.item[constant.tableHeaders[index-1].value]"
              hide-details
              :true-value="dataStatus.on[0]"
              :false-value="dataStatus.off[0]"
              color="primary">
            </v-switch>
          </template>
      <template v-else-if="constant.tableHeaders[index-1].value === 'funname' && props.item.level > 1">
            <span class="pl-3 pr-1">├─</span>{{ props.item[constant.tableHeaders[index-1].value] || '-'}}
          </template>
      <template v-else-if="constant.tableHeaders[index-1].value !== 'action'">
            {{ props.item[constant.tableHeaders[index-1].value] || '-'}}
          </template>
      <template v-else>
            <v-tooltip bottom>
              <v-btn slot="activator" icon class="mx-0" @click="editItem(props.item)">
                <v-icon color="primary">edit</v-icon>
              </v-btn>
              <span>修改</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator" icon class="mx-0" @click="deleteItem(props.item)">
                <v-icon color="error">delete</v-icon>
              </v-btn>
              <span>废弃</span>
            </v-tooltip>
            <v-tooltip bottom v-if="props.item.pid === '0'">
              <v-btn slot="activator" icon class="mx-0" @click="addItem(props.item)">
                <v-icon color="accent">add</v-icon>
              </v-btn>
              <span>添加子项</span>
            </v-tooltip>
          </template>
      </td>
      </template>
    </v-data-table>
  </v-container>
</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "feature",
  data() {
    return {
      dialog: false,
      feature: {
        id: "",
        pid: "0",
        funname: "",
        funcode: "",
        url: "",
        sort: "0",
        level: "1",
        status: "",
        icon: 'face'
      },
      rules: {
        funname: [
          v => !!v || '模块名称不能为空',
          v => (v && v.length <= 8 && v.length >= 2) || '模块名称为2-8个字'
        ],
        funcode: [v => !!v || '模块名称不能为空'],
        url: [
          v => (v === '' || /^(\/([0-9a-zA-Z]+))+$/.test(v)) || '请填写正确路径，如："/path/child"'
        ],
        sort: [
          v => (/^-?\d+$/.test(v)) || '请填写数字'
        ]
      }
    };
  },
  computed: {
    ...mapGetters(['featureList', 'featureParents', 'dataStatus', 'sortedFeatureList']),
    constant() {
      return this.$config.constant.system.feature;
    },
    dataStatus() {
      const statuses = this.$config.constant.share.data;
      let statusArray = Object.entries(statuses);
      let on = statusArray.find(status => status[1].value === 1);
      let off = statusArray.find(status => status[1].value === 2);
      let deprecated = statusArray.find(status => status[1].value === 3);
      return ({
        on,
        off,
        deprecated
      });
    }
  },
  methods: {
    ...mapActions([
      'saveFeature',
      'deleteFeature',
      'changeFeatureStatus',
      'showSnackbar',
      'showConfirm'
    ]),
    isSwitchOn(status) {
      return status === this.dataStatus.on[0];
    },
    addItem(item) {
      this.resetFeatureForm();
      this.feature.pid = item.id;
      if (item.id.length > 0) {
        this.feature.level = 2
      }
      this.dialog = true;
    },
    editItem(item) {
      this.resetFeatureForm();
      this.feature = Object.assign({}, item);
      delete this.feature.children;
      this.dialog = true;
    },
    deleteItem(feature) {
      let id = feature.id;
      if (id.length > 0) {
        this.changeFeatureStatus({
            ids: [id],
            status: this.dataStatus.deprecated[0]
          })
          .then(() => {
            this.showSnackbar('操作成功')
          });
      }
    },
    saveItem() {
      if (this.$refs.featureForm.validate()) {
        this.saveFeature(this.feature)
          .then(() => this.dialog = false);
      }
    },
    resetFeatureForm() {
      this.feature = {
        id: "",
        pid: "0",
        funname: "",
        funcode: "",
        url: "",
        sort: "0",
        level: "1",
        icon: 'face',
        status: this.dataStatus.on[0]
      }
    },
    closeDialogAndRestForm() {
      this.dialog = false;
      setTimeout(() => {
        this.resetFeatureForm();
      }, 350);
    },
    switchFeatureStatus(feature) {
      // this.showConfirm('确定要删除吗!//暂未实现');

      let id = feature.id;
      let status = feature.status;
      let ids = [];
      if (status === this.dataStatus.off[0]) {
        ids = this.featureList.filter(item => item.pid === id)
          .map(item => item.id);
      }
      ids.push(id);
      this.changeFeatureStatus({
          ids,
          status
        })
        .then(() => {
          this.showSnackbar('操作成功')
        });
    }
  },
  mounted() {
    this.feature.status = this.dataStatus.on[0];
  }
};
</script>

<style lang="scss">
</style>
