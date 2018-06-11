<template lang="html">
  <v-toolbar app absolute :clipped-left="$vuetify.breakpoint.lgAndUp" dark class="primary">
    <v-toolbar-side-icon @click.native="toggleDrawer"></v-toolbar-side-icon>
    <span class="title ml-3 mr-5">{{$scout.projectName}}</span>
    <v-text-field solo-inverted  flat label="Search" prepend-icon="search"></v-text-field>
    <v-spacer />
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="24px" tile>
        <img
          src="https://vuetifyjs.com/static/doc-images/logo.svg"
          alt="Vuetify"
        >
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: true
  }),
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer');
    }
  }
}
</script>

<style lang="css">
</style>
