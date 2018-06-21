<template lang="html">
  <v-container fluid>
    <v-layout>
    <v-flex xs12 lg6>
      <v-card>
        <v-card-title>
          <v-toolbar>
            <v-toolbar-title>2018年6月21日20:08:19</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat>Link One</v-btn>
              <v-btn flat>Link Two</v-btn>
              <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">审核</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['infoChangeLog']),
  },
  methods: {
    ...mapActions(['getInfoChangeLog'])
  },
  mounted() {
    this.getInfoChangeLog({
      comid: '1528708466833525'
    })
  }
}
</script>
