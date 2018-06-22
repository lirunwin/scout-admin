<template lang="html">
  <v-container
    class="py-0"
    :fluid="$vuetify.breakpoint.mdAndUp"
    v-bind="{[`grid-list-${$vuetify.breakpoint.name}`]: true }"
    >
    <v-layout row wrap align-center>
      <v-flex xs6 md2 v-if="type">
        <v-select
          :items="type"
          item-text="label"
          item-value="value"
          v-model="filter.type"
          label="评分类型"
          @input="go"
        ></v-select>
      </v-flex>
      <v-flex xs6 md2 v-if="status">
        <v-select
          :items="dataStatus"
          item-text="label"
          item-value="value"
          v-model="filter.status"
          label="状态"
          @input="go"
        ></v-select>
      </v-flex>
      <v-flex xs12 md4 v-if="keyword">
        <v-text-field
          name="name"
          label="关键词"
          v-model="filter.keyword"
          @input="go"
        ></v-text-field>
      </v-flex>
      <v-flex style="flex:0" class="pb-2 px-0"><v-btn color="primary" class="mb-3" @click="search">{{ title }}</v-btn></v-flex>
      <v-flex style="flex:0" class="pb-2 px-0"><v-btn color="primary lighten-1" class="mb-3" @click="resetForm">重置</v-btn></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    value: Object,
    type: Array,
    status: {
      type: Boolean,
      default: true
    },
    keyword: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '搜索'
    }
  },
  data: () => ({
    filter: {
      type: '',
      status: '',
      keyword: ''
    }
  }),
  computed: {
    dataStatus() {
      let status = this.$constant.global.dataStatus;
      return status;
    }
  },
  mounted() {
    this.filter = Object.assign({}, this.value)
  },
  methods: {
    go() {
      this.$emit('input', this.filter);
    },
    search() {
      this.$emit('search');
    },
    resetForm() {
      this.filter = {
        type: '',
        status: '',
        keyword: ''
      }
      this.$emit('input', this.filter)
    }
  }
}
</script>

<style lang="css">
</style>
