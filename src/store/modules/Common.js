import CommonService from '@/services/CommonService';
const state = {
  cities: [],
};
const getters = {
  cities: state => state.cities,
};
const mutations = {
  updateCities: (state, payload) => state.cities = state.cities.concat(payload),
};
const actions = {
  getCities(context, payload) {
    return CommonService.getCities(payload).then((cities => {
      console.log('我在这儿去去去', JSON.stringify(cities, null, 2));
      context.commit('updateCities', cities);
      return cities;
    }));
  },
  uploadFile(context, payload) {
    return CommonService.uploadFile(payload).then((res => {
      return res;
    }));
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
