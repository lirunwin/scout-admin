<template lang="html">
  <v-dialog v-model="computedShowDialog" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">审核</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md class="py-0">
          <v-layout>
            <v-radio-group v-model="review.pass">
              <v-layout row wrap>
                <v-flex xs4>
                  <v-radio
                    label="通过"
                    :value="true"
                    color="primary"
                  ></v-radio>
                </v-flex>
                <v-flex xs4>
                  <v-radio
                    label="不通过"
                    :value="false"
                    color="primary"
                  ></v-radio>
                </v-flex>
              </v-layout>
            </v-radio-group>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                label="审核内容"
                multi-line
                v-model="review.note"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="showDialog = !showDialog">关闭</v-btn>
        <v-btn color="primary" @click="onReview">确定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showDialog: true,
    review: {
      pass: false,
      note: ''
    }
  }),
  computed: {
    computedShowDialog() {
      if (!this.show) {
        return false;
      } else {
        return this.showDialog;
      }
    }
  },
  methods: {
    onReview() {
      this.$emit('onReview');
    }
  }
}
</script>

<style lang="css">
</style>
