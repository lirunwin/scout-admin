import UserService from '@/services/UserService';
const state = {
  enterprises: []
};
const getters = {
  enterprises: state => state.enterprises
};
const mutations = {
  updateEnterprises: (state, payload) => state.enterprises = payload,
};
const actions = {
  getAllEnterprises(context, payload) {
    return UserService.getAllEnterprises(payload).then((enterprises => {
      context.commit('updateEnterprises', enterprises.content);
    }));
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
