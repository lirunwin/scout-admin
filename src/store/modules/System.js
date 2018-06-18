import SystemService from '@/services/SystemService';
const state = {
  featureList: [],
  sideBar: []
};
const getters = {
  featureList: state => state.featureList,
  sideBar: state => state.featureList.filter(feature => feature.level === 1).map(parent => {
    let children = state.featureList.filter(child => parent.id === child.pid);
    if(children.length > 0) {
      parent.children = children;
    }
    return parent;
  })
};
const mutations = {
  setFeatureList: (state, payload) => state.featureList = payload,
  setSideBar: (state, payload) => {

  }
};
const actions = {
  getAllFeatrue(context) {
    return SystemService.getAllFeatrue().then(featureList => {
      context.commit('setFeatureList', featureList);
      return featureList;
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
