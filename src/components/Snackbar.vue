<template lang="html">
  <v-snackbar
      :timeout="options.timeout"
      :top="options.y === 'top'"
      :bottom="options.y === 'bottom'"
      :right="options.x === 'right'"
      :left="options.x === 'left'"
      :multi-line="options.mode === 'multi-line'"
      :vertical="options.mode === 'vertical'"
      :color="options.color"
      v-model="options.isVisible"
    >
      {{options.text}}
      <v-btn class="primary" fab @click="hideSnackbar">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "snackbar",
  computed: {
    ...mapGetters({
      options: 'snackbarOptions'
    }),
  },
  methods: {
    ...mapActions(['hideSnackbar'])
  }
}
</script>
