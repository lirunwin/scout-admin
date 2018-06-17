<template lang="html">
  <v-navigation-drawer app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      class="grey lighten-4">
      <v-list dense>
        <template v-for="(item, i) in list">
          <v-list-group
            v-if="item.children"
            v-model="item.model"
            :key="i"
            :append-icon="item.model ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            :prepend-icon="item.icon ? item.icon : 'people'"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.funname }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, j) in item.children"
              :key="j"
              :to="{ path: '/user/enterprise' }"
            >
              <v-list-tile-action v-if="child.icon" class="pl-3">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.funname }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="handleClick" :key="item.id">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.funname }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    list: [{
        funcode: "system",
        funname: "用户管理",
        funtype: "FUNTYPE_JZSYSTEM",
        icon: "",
        id: "1528197070314151",
        level: 1,
        pid: "0",
        sort: 0,
        status: "DATA_NORMAL",
        model: true,
        children: [{
            funcode: "system",
            funname: "企业用户",
            funtype: "FUNTYPE_JZSYSTEM",
            icon: "person_outline",
            id: "1528197070314152",
            level: 1,
            pid: "0",
            sort: 0,
            status: "DATA_NORMAL",
            path: '/user/enterprise'
          },
          {
            funcode: "system",
            funname: "个人用户",
            funtype: "FUNTYPE_JZSYSTEM",
            icon: "person",
            id: "1528197070314152",
            level: 1,
            pid: "0",
            sort: 0,
            status: "DATA_NORMAL",
            path: '/user/common'
          }
        ]
      },
      {
        funcode: "system",
        funname: "招聘信息",
        funtype: "FUNTYPE_JZSYSTEM",
        icon: "lock",
        id: "1528197070314153",
        level: 1,
        pid: "0",
        sort: 0,
        status: "DATA_NORMAL",
        children: [{
            funcode: "system",
            funname: "兼职招聘",
            funtype: "FUNTYPE_JZSYSTEM",
            icon: "sentiment_satisfied",
            id: "1528197070314152",
            level: 1,
            pid: "0",
            sort: 0,
            status: "DATA_NORMAL",
            path: '/user/enterprise'
          },
          {
            funcode: "system",
            funname: "实习招聘",
            funtype: "FUNTYPE_JZSYSTEM",
            icon: "sentiment_very_satisfied",
            id: "1528197070314152",
            level: 1,
            pid: "0",
            sort: 0,
            status: "DATA_NORMAL",
            path: '/user/common'
          }
        ]
      },
      {
        funcode: "system",
        funname: "基础数据",
        funtype: "FUNTYPE_JZSYSTEM",
        icon: "lock",
        id: "1528197070314154",
        level: 1,
        pid: "0",
        sort: 0,
        status: "DATA_NORMAL"
      },
      {
        funcode: "system",
        funname: "战队管理",
        funtype: "FUNTYPE_JZSYSTEM",
        icon: "lock",
        id: "1528197070314155",
        level: 1,
        pid: "0",
        sort: 0,
        status: "DATA_NORMAL"
      },
      {
        funcode: "system",
        funname: "评价管理",
        funtype: "FUNTYPE_JZSYSTEM",
        icon: "lock",
        id: "1528197070314156",
        level: 1,
        pid: "0",
        sort: 0,
        status: "DATA_NORMAL"
      }
    ]
  }),
  mounted() {
    this.drawer = this.toggleDrawer
  },
  props: {
    toggleDrawer: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    toggleDrawer: function(newValue) {
      this.drawer = newValue;
    },
    drawer: function(newValue) {
      this.$emit('toggleDrawer', newValue)
    }
  },
  methods: {
    handleClick() {
      console.log('sidebar clicked')
    }
  }

}
</script>

<style lang="css">
</style>
