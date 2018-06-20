<template lang="html">
  <v-toolbar light
    color="secondary"
    flat>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer><v-btn icon @click="onRefresh">
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-tooltip bottom>
      <v-btn icon @click="onLoaclSearch" >
        <v-icon>search</v-icon>
      </v-btn>
      <span>搜索当前页面</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon @click="onRefresh">
        <v-icon>refresh</v-icon>
      </v-btn>
      <span>刷新当前页面</span>
    </v-tooltip>
    <v-tooltip bottom>
      <v-btn icon @click="onRefresh">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <span>其他</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    onLoaclSearch() {
      this.$emit('onLoaclSearch')
    },
    onRefresh() {
      this.$emit('onRefresh');
    }
  }
}
</script>
