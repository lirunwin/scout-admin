<template lang="html">
  <v-navigation-drawer app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      class="grey lighten-4">
      <v-list dense>
        <template v-for="(item, i) in sideBar">
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
              :to="{ path: child.url }"
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
      <pre class="caption"></pre>
  </v-navigation-drawer>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    toggleDrawer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      sideBar: 'features',
      featureList: 'featureList'
    })
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
    },
    ...mapActions(['getAllFeatrues'])
  },
  mounted() {
    this.getAllFeatrues();
  }
}
</script>

<style lang="css">
</style>
