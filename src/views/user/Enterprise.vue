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
    :fluid="$vuetify.breakpoint.name !== 'xs' || $vuetify.breakpoint.name !== 'sm'"
    v-bind="{[`grid-list-${$vuetify.breakpoint.name}`]: true }"
    >
    <v-layout row wrap align-center>
      <v-flex xs6 md2>
        <v-select
          :items="constant.status"
          item-text="label"
          item-value="value"
          v-model="status"
          label="企业状态"
        ></v-select>
      </v-flex>
      <v-flex xs6 md2>
        <v-select
          :items="constant.level"
          item-text="label"
          item-value="value"
          v-model="level"
          label="企业等级"
        ></v-select>
      </v-flex>
      <v-flex xs12 md4 class="pb-2">
        <v-text-field
          name="name"
          label="关键词"
          v-model="keyword"
          id="id"
        ></v-text-field>
      </v-flex>
      <v-flex style="flex:0" class="pb-2 px-0"><v-btn color="primary" class="mb-3" @click="dialog = !dialog">搜索</v-btn></v-flex>
      <v-flex>
        <v-select
          :items="constant.orderBy"
          item-text="label"
          item-value="value"
          v-model="orderBy"
          label="排序"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container fluid class="py-0">
    <v-data-table
      :headers="constant.tableHeader"
      :items="desserts"
      no-data-text="未查询到数据..."
      no-results-text="无筛选结果"
      rows-per-page-text="每页显示"
      :rows-per-page-items='[5,10,25,{"text":"全部","value":-1}]'
      disable-initial-sort
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td v-for="index of constant.tableHeader.length" :key="index">{{ props.item[constant.tableHeader[index-1].value] || '-'}}</td>
      </template>
    </v-data-table>
    <v-layout row justify-center >
      <v-dialog v-model="dialog" max-width="500px">
        <v-card light color="grey lighten-5">
          <v-card-title>
            <span class="headline">新增模块</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Legal first name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                    autocomplete
                    chips
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</div>
</template>
<script>
export default {
  name: 'enterprise',
  data() {
    return {
      status: '',
      level: '',
      orderBy: '',
      keyword: '',
      dialog: false,
      constant: this.$config.constant.user.enterprise,
      desserts: [{
          value: '正常',
          name: 'aaa',
          calories: '13554016524',
          fat: '民营',
          carbs: 'VIP',
          protein: '小猪佩奇',
          cellphone: '13965412365',
          location: '四川成都',
          deposit: 800,
          score: 9.8,
          posts: 99,
          createTime: '2019-12-12 08:12'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ]
    }
  },
  methods: {
    addPermission() {
      this.dialog = true
    }
  }
}
</script>

<style lang="scss">
</style>
