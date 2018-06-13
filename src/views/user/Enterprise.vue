<template lang="html">
<div>
  <v-tabs
      light
      show-arrows
    >
      <v-tabs-slider color="teal"></v-tabs-slider>
      <v-tab
        v-for="i in 5"
        :key="i"
        :href="'#tab-' + i"
        color="teal"
      >
        Item {{ i }}
      </v-tab>
      <v-tabs-items>
        <v-tab-item
          v-for="i in 5"
          :key="i"
          :id="'tab-' + i"
        >
          <v-card flat>
            <v-card-text>{{ i }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
</div>
</template>
<script>
export default {
  name: 'enterprise'
}
</script>

<style lang="scss">
</style>
