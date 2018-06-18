<template lang="html">
<div class="permission">
  <v-container fluid>
    <v-toolbar light color="secondary" flat>
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
  </v-container>
  <v-container fluid class="py-0">
    <v-data-table
      :headers="constant.tableHeader"
      :items="featureList"
      no-data-text="未查询到数据..."
      no-results-text="无筛选结果"
      rows-per-page-text="每页显示"
      :rows-per-page-items='[5,10,25,{"text":"全部","value":-1}]'
      disable-initial-sort
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td v-for="index of constant.tableHeader.length" :key="index" :class="{'justify-start layout px-0': constant.tableHeader[index-1].value === 'action'}">
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
  </v-container>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'feature',
  data() {
    return {
      status: '',
      level: '',
      orderBy: '',
      keyword: '',
      dialog: false,
      constant: this.$config.constant.system
    }
  },
  computed: {
    ...mapGetters(['featureList'])
  },
  methods: {
    addPermission() {
      this.dialog = true
    },
    addItem(item) {
      console.log(item);
    },
    editItem(item) {
      console.log(item);
    },
    deleteItem(item) {
      console.log(item);
<<<<<<< HEAD
    },
    prefix(level) {
      switch (level) {
        case '1':
          return 'px-3'

      }
      return 'px'
=======
>>>>>>> 8df2c0858b4049aba22bcb71b8469d7bd5383ffc
    }
  }
}
</script>

<style lang="scss">
</style>
