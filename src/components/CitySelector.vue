<template lang="html">
  <v-container fluid grid-list-lg class="py-0">
    <v-layout row wrap class="py-0">
      <v-flex :xs12="$vuetify.breakpoint.xs">
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
      <v-flex :xs12="$vuetify.breakpoint.xs" v-if="disableCity === undefined">
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
      <v-flex :xs12="$vuetify.breakpoint.xs" v-if="disableCity === undefined && disableCounty === undefined">
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
  </v-container>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'CitySelector',
  props: ['value', 'disableCity', 'disableCounty'],
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
      return this.cities.filter(item => item.pid === this.location.province);
    },
    county() {
      return this.cities.filter(item => item.pid === this.location.city);
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
      if (this.disableCity === undefined) {
        this.onChange();
        this.location.city = '0';
        this.location.county = '0';
        let city = this.cities.filter(item => item.pid === id);
        if (city.length === 0) {
          this.getCity(id)
        }
      }
    },
    onCityChange(id) {
      this.onChange();
      if (this.disableCounty === undefined) {
        this.location.county = '0';
        let county = this.cities.filter(item => item.pid === id);
        if (county.length === 0) {
          this.getCounty(id)
        }
      }
    },
    onCountyChange() {
      this.onChange();
    },
    onChange() {
      if (this.disableCity !== undefined) {
        delete this.location.city
      }
      if (this.disableCounty !== undefined) {
        delete this.location.county
      }
      this.$emit('input', this.location);
    },
    getDefault() {
      let defaultLocation = this.value;
      if (defaultLocation.province > 0) {
        this.getCities({
          id: "0"
        });
        this.getCities({
          id: defaultLocation.province
        });
        this.getCities({
          id: defaultLocation.city
        });
      } else {
        this.getCities({
          id: "0"
        });
      }
    }
  },
  mounted() {
    this.location = Object.assign({}, this.value);
    this.getDefault();
  }
}
</script>
