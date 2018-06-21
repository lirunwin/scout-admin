<template lang="html">
  <v-container class="px-0">
    <input type="file"
    v-show="false"
    ref="uploadImage"
    accept="image/*"
    @change="onFilePicked">
    <v-layout row wrap class="align-center">
      <v-flex xs6 class="pl-0" style="max-height:200px;">
          <img :src="imageUrl">
      </v-flex>
      <v-flex xs6 class="text-xs-center">
        <v-btn color="primary" @click="chooseFile">
          上传图片
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    image: null,
    imageUrl: require('@/assets/img/img_placeholder.gif')
  }),
  methods: {
    chooseFile() {
      this.$refs.uploadImage.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      })
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      this.$emit('onChange', this.image);
    }
  }
}
</script>

<style lang="scss">

</style>
