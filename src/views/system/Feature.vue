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
            <v-card-title>
              <span class="headline">新增模块</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout row
                  align-center
                  wrap>
                  <!-- <v-flex xs5
                    class="text-xs-right">
                    父集分类：
                  </v-flex> -->
                  <v-flex xs12>
                    <v-select :items="featureParents"
                      v-model="feature.pid"
                      label="请选择父级分类"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field name="name"
                      label="模块名称"
                      :rules="rules.funname"
                      required
                      v-model="feature.funname"
                      id="id"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field name="name"
                      label="路径"
                      :rules="rules.url"
                      v-model="feature.url"
                      id="id"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field name="name"
                      label="排序"
                      required
                      :rules="rules.sort"
                      v-model="feature.sort"
                      type="number"
                      id="id"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row
                  align-center>
                  <v-flex class="pl-0"
                    style="flex-grow: 0;">
                    状态：
                  </v-flex>
                  <v-flex>
                    <v-switch color="primary"
                      hide-details
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
                @click.native="dialog = false">重置</v-btn>
              <v-btn class="primary"
                @click="saveFeature">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-form>
  </v-container>
  <v-container fluid
    class="py-0">
    <v-data-table :headers="constant.tableHeader"
      :items="featureList"
      no-data-text="未查询到数据..."
      no-results-text="无筛选结果"
      rows-per-page-text="每页显示"
      :rows-per-page-items='[5,10,25,{"text":"全部","value":-1}]'
      disable-initial-sort
      class="elevation-1">
      <template slot="items"
        slot-scope="props">
        <td
          v-for="index of constant.tableHeader.length"
          :key="index"
          :class="{'justify-start layout px-0': constant.tableHeader[index-1].value === 'action'}"
        >
          <template v-if="constant.tableHeader[index-1].value === 'status'">
            {{ $config.constant.share[props.item[constant.tableHeader[index-1].value]].name || '-'}}
          </template>
      <template v-else-if="constant.tableHeader[index-1].value !== 'action'">
        {{ props.item[constant.tableHeader[index-1].value] || '-'}}
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
              <span>删除</span>
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
    <pre>{{feature}}</pre>
  </v-container>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "feature",
  data() {
    return {
      dialog: false,
      constant: this.$config.constant.system,
      feature: {
        pid: '0',
        funname: '',
        url: '',
        sort: '0',
        status: true,
        icon: ''
      },
      rules: {
        funname: [
          v => !!v || '模块名称不能为空',
          v => (v && v.length <= 4 && v.length >= 2) || '模块名称为2-4个字'
        ],
        url: [
          v => (v === '' || /^\//.test(v)) || '请填写正确路径，如："/path/child"'
        ],
        sort: [
          v => (v && /^-?\d+$/.test(v)) || '请填写数字'
        ],
        status: '',
      }
    };
  },
  computed: {
    ...mapGetters(['featureList', 'featureParents'])
  },
  methods: {
    addPermission() {
      this.dialog = true;
    },
    addItem(item) {
      console.log(item);
    },
    editItem(item) {
      console.log(item);
    },
    deleteItem(item) {
      console.log(item);
    },
    prefix(level) {
      switch (level) {
        case "1":
          return "px-3";
      }
      return "px";
    },
    saveFeature() {
      if (this.$refs.featureForm.validate()) {
        // Native form submission is not yet supported

      }
    }
  }
};
</script>

<style lang="scss">
</style>
