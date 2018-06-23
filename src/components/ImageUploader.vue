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
        <v-btn color="primary" @click="chooseFile" :loading="loading">
          上传图片
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    image: null,
    imageUrl: require('@/assets/img/img_placeholder.gif'),
    loading: false
  }),
  methods: {
    ...mapActions(['uploadFile']),
    chooseFile() {
      this.$refs.uploadImage.click();
    },
    onFilePicked(event) {
      this.loading = true;
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

      let formData = new FormData();
      formData.append("file", files[0]);
      // var request = new XMLHttpRequest();
      // request.open("POST", "http://192.168.0.105:8085/common/upload");
      // request.send(formData);
      this.uploadFile(formData)
        .then(res => {
          this.$emit('input', res.src);
          this.loading = false;
        });

    }
  }
}
</script>

<style lang="scss">

</style>
