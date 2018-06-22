<template lang="html">
  <v-dialog v-model="value" max-width="90%">
    <v-card>
      <v-card-title>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-btn icon color="secondary darken-3" @click="closeDialog">
              <v-icon>close</v-icon>
            </v-btn>
          </v-layout>
          <v-layout row wrap justify-center>
            <img :src="src" class="mx">
          </v-layout>
        </v-container>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['value', 'src'],
  methods: {
    closeDialog() {
      this.$emit('input', false);
    }
  }
}
</script>

<style lang="css">
</style>
