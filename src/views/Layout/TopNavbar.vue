<template lang="html">
  <v-toolbar app :clipped-left="$vuetify.breakpoint.lgAndUp" dark flat fixed class="primary">
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
