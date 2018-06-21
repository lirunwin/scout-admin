<template lang="html">
  <v-container class="py-0 px-0">
    <v-layout row wrap class="py-0">
      <v-flex xs12 sm4>
        <v-select
          :items="province"
          v-model="location.province"
          label="省"
          item-text="areaname"
          item-value="id"
          :disabled="province.length === 0"
          :loading="province.length === 0"
          hide-details
          @change="onProvinceChange"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4>
        <v-select
          :items="city"
          v-model="location.city"
          label="市"
          item-text="areaname"
          item-value="id"
          hide-details
          :disabled="city.length === 0"
          :loading="isCityLoading"
          @change="onCityChange"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4>
        <v-select
          :items="county"
          v-model="location.county"
          label="区县"
          item-text="areaname"
          item-value="id"
          hide-details
          :disabled="county.length === 0"
          :loading="isCountyLoading"
          @change="onCountyChange"
          ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  // props: ['location'],
  data: () => ({
    items: [],
    location: {
      province: '0',
      city: '0',
      county: '0'
    },
    isCityLoading: false,
    isCountyLoading: false
  }),
  computed: {
    ...mapGetters(['cities']),
    province() {
      return this.cities.filter(item => item.pid === '0');
    },
    city() {
      let id = this.location.province;
      if (id === '0') {
        return []
      }
      let city = this.cities.filter(item => item.pid === id);
      if (city.length === 0) {
        this.isCityLoading = true;
        this.getCities({ id })
          .then(() => this.isCityLoading = false);
      }
      return city;
    },
    county() {
      let id = this.location.city;
      if (id === '0') {
        return []
      }
      let county = this.cities.filter(item => item.pid === id);
      if (county.length === 0) {
        this.isCountyLoading = true;
        this.getCities({ id })
          .then(() => this.isCountyLoading = false);
      }
      return county;
    }
  },
  methods: {
    ...mapActions(['getCities']),
    onProvinceChange() {
      this.onChange();
      this.location.city = '0';
      this.location.county = '0';
    },
    onCityChange() {
      this.onChange();
      this.location.county = '0';
    },
    onCountyChange() {
      this.onChange();
    },
    onChange() {
      this.$emit('onChange', this.location);
    }
  }

}
</script>

<style lang="css">
</style>
