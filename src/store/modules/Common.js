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
      if(cities) {
        context.commit('updateCities', cities);
      }
    }));
  }

};

export default {
  state,
  getters,
  mutations,
  actions
};
