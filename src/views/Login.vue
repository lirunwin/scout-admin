<template lang="html">
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-5">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{$scout.projectName}}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="用户名" type="text" autofocus></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="密码"
                :append-icon="showPwd ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (showPwd = !showPwd)" :type="showPwd ? 'password' : 'text'"></v-text-field>
              <div class="captcha">
                <v-text-field id="captcha" prepend-icon="lock" name="captcha" label="验证码" type="text"></v-text-field>
                <img :src="captcha" alt="">
              </div>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">登录</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showPwd: false,
    captcha: 'http://192.168.1.3:8085/common/getVerifyCode'
  }),
  props: {
    source: String
  },
  methods: {
    login() {
      this.$http({
        url: 'http://192.168.1.3:8085/system/getAllFunction',
        method: 'get'
      })
    }
  }
}
</script>

<style lang="scss">
.captcha {
    position: relative;
    img {
        position: absolute;
        top: 18px;
        right: 0;
        max-height: 30px;
    }
}
</style>
