<template lang="html">
  <div>infomation change log</div>
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
