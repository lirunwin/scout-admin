<template lang="html">
  <v-container class="role">
    <toolbar title="角色" @onRefresh="refresh"></toolbar>
    <v-layout row wrap class="py-3">
      <v-btn color="primary">删除</v-btn>
      <v-btn
        @click="dialog = !dialog"
        slot="activator"
        color="primary"
        dark
        >新增角色</v-btn>
    </v-layout>
    <v-container fluid class="px-0 py-0">
      <v-data-table
        :headers="roleTableHeaders"
        :items="roles"
        no-data-text="未查询到数据..."
        no-results-text="无筛选结果"
        rows-per-page-text="每页显示"
        :rows-per-page-items='[50,{"text":"全部","value":-1}]'
        disable-initial-sort
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td
            v-for="index in roleTableHeaders.length"
            :key="index"
            :class="{
              'justify-start layout px-1': roleTableHeaders[index-1].value === 'action'
            }">
            <template v-if="roleTableHeaders[index-1].value !== 'action'">
              {{ props.item[roleTableHeaders[index-1].value] }}
            </template>
            <template v-else>
              <v-tooltip bottom>
                <v-btn slot="activator" icon class="mx-0" @click="editItem(props.item)">
                  <v-icon color="primary">edit</v-icon>
                </v-btn>
                <span>修改</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn slot="activator" icon class="mx-0" @click="deleteRole(props.item.id)">
                  <v-icon color="error">delete</v-icon>
                </v-btn>
                <span>删除</span>
              </v-tooltip>
            </template>
          </td>
        </template>
      </v-data-table>
    </v-container>
    <v-form ref="roleForm">
      <v-layout row
        justify-start
        class="mt-3">
        <v-dialog v-model="dialog"
          persistent
          max-width="80%">
          <v-card>
            <v-card-title class="pb-0">
              <span class="headline">{{!role.id? '新增角色' : '修改角色'}}</span>
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
                    <v-text-field name="name"
                      label="角色名称"
                      :rules="rules.name"
                      required
                      v-model="role.name"></v-text-field>
                  </v-flex>
                  <v-flex xs12
                    class="py-0">
                    <v-text-field name="name"
                      multi-line
                      label="描述"
                      :rules="rules.remark"
                      v-model="role.remark"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md4 lg3 v-for="feature in features" :key="feature.id">
                    <v-card>
                      <v-toolbar color="primary lighten-1" dark>
                        <v-toolbar-title>
                          <v-checkbox v-model="funids"
                            color="primary darken-1"
                            :value="feature.id"
                            :label="feature.funname"
                            @click="addSubFeatureIds(feature)"
                          ></v-checkbox>
                        </v-toolbar-title>
                      </v-toolbar>
                      <v-list>
                        <v-list-tile avatar v-for="subFeature in feature.children" :key="subFeature.id">
                          <v-list-tile-action>
                            <v-checkbox v-model="funids" color="primary" :value="subFeature.id"></v-checkbox>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>{{ subFeature.funname }}</v-list-tile-title>
                            <!-- <v-list-tile-sub-title>{{ subFeature.url }}</v-list-tile-sub-title> -->
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*为必填项</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="error"
                @click="resetRoleForm">重置</v-btn>
              <v-btn class="primary"
                @click="saveItem">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-form>
    <pre class="caption">{{features}}</pre>
</v-container>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import { mapActions, mapGetters } from 'vuex';
import _array from 'lodash/array';
export default {
  name: 'role',
  components: {
    Toolbar
  },
  data: () => ({
    dialog: true,
    role: {},
    rules: {},
    funids: []
  }),
  computed: {
    roleTableHeaders() {
      return this.$config.constant.system.role.tableHeaders;
    },
    ...mapGetters(['roles', 'features'])
  },
  methods: {
    ...mapActions(['getAllRoles', 'deleteRole', 'saveRole']),
    refresh() {
      this.getAllRoles();
    },
    addSubFeatureIds(feature) {
      let ids = feature.children.map(subFeature => subFeature.id);
      this.funids = _array.union(this.funids, ids);
      console.log(_array.union([1, 2, 3, 4], [3, 4, 5, 6]))
    },
    resetRoleForm() {
      this.role = {}
    },
    closeDialogAndRestForm() {
      this.dialog = false;
      this.resetRoleForm();
    },
    editItem(role) {
      this.role = role
    },
    saveItem() {
      this.role.funids = [];
      this.role.id = '';
      this.saveRole(this.role)
        .then(() => {
          console.log('response')
        });
    }
  },
  mounted() {
    this.getAllRoles();
  }
}
</script>

<style lang="css">
</style>
