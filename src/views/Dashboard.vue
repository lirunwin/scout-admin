<template lang="html">
  <div class="main-content">
      <button type="button" name="button" @click='content += content'>asd</button>
      <div v-html="content">

      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    content: `
      <div style='padding:30px;'>asdjklsajdkljsakljdklsaj</div>
    `
  }),
}
</script>

<style lang="scss">
  .main-content {
    height: 558px;
  }
</style>
