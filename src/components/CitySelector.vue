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
          @input="onProvinceChange"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4 v-if="!disabledCity">
        <v-select
          :items="city"
          v-model="location.city"
          label="市"
          item-text="areaname"
          item-value="id"
          hide-details
          :disabled="city.length === 0"
          :loading="isCityLoading"
          @input="onCityChange"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4 v-if="!disabledCounty">
        <v-select
          :items="county"
          v-model="location.county"
          label="区县"
          item-text="areaname"
          item-value="id"
          hide-details
          :disabled="county.length === 0"
          :loading="isCountyLoading"
          @input="onCountyChange"
          ></v-select>
      </v-flex>
    </v-layout>
    {{county}}
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CitySelector',
  props: ['value', 'disabledCity', 'disabledCounty'],
  data: () => ({
    items: [],
    location: {},
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
      return city;
    },
    county() {
      let id = this.location.city;
      if (id === '0') {
        return []
      }
      let county = this.cities.filter(item => item.pid === id);

      return county;
    }
  },
  methods: {
    ...mapActions(['getCities']),
    getCity(id) {
      if (!this.isCityLoading) {
        this.isCityLoading = true;
        this.getCities({ id })
          .then(() => this.isCityLoading = false);
      }
    },
    getCounty(id) {
      if (!this.isCountyLoading) {
        this.isCountyLoading = true;
        this.getCities({ id })
          .then(() => this.isCountyLoading = false);
      }
    },
    onProvinceChange(id) {
      this.onChange();
      this.location.city = '0';
      this.location.county = '0';
      let city = this.cities.filter(item => item.pid === id);
      if (city.length === 0) {
        this.getCity(id)
      }
    },
    onCityChange(id) {
      this.onChange();
      this.location.county = '0';
      let county = this.cities.filter(item => item.pid === id);
      if (county.length === 0) {
        this.getCounty(id)
      }
    },
    onCountyChange(id) {
      this.onChange();
    },
    onChange() {
      this.$emit('input', this.location);
    },
    getDefault() {
      let defaultLocation = this.value;
      if (defaultLocation.province > 0) {
        this.getCities({ id: "0" });
        this.getCities({ id: defaultLocation.province });
        this.getCities({ id: defaultLocation.city });
      } else {
        this.getCities({ id: "0" });
      }
    }
  },
  mounted() {
    this.location = Object.assign({}, this.value);
    console.log(this.value);
    this.getDefault();
  }
}
</script>

<style lang="css">
</style>
