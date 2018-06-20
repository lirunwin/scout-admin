import SystemService from '@/services/SystemService';
const state = {
  featureList: [],
  features: [],
  snackbar: {
    isVisible: false,
    y: 'bottom',
    x: 'right',
    mode: '',
    timeout: 3000,
    color: 'primary',
    text: ''
  },
  confirm: {
    isVisible: false,
    title: '温馨提示',
    text: '',
  },
  roles:[]
};
const getters = {
  featureList: state => state.featureList,
  featureParents: state => state.featureList.filter(feature => feature.level === 1),
  features: state => state.featureList.filter(feature => feature.level === 1).map(parent => {
    let children = state.featureList.filter(child => parent.id === child.pid);
    let featureFamily = Object.assign({}, parent);
    if (children.length > 0) {
      featureFamily.children = children;
    }
    return featureFamily;
  }),
  snackbarOptions: state => state.snackbar,
  confirmOptions: state => state.confirm,
  sortedFeatureList: state => {
    let features = state.featureList;
    // return features.sort((fa, fb) => fa.sort > fb.sort);
    return features;
  },
  roles: state => state.roles,
};
const mutations = {
  setFeatureList: (state, payload) => state.featureList = payload,
  setRolesList: (state, payload) => state.roles = payload,
  pushFeatureList: (state, payload) => {l
    return state.featureList.push(payload)
  },
  updataFeatureList: (state, payload) => state.featureList = state.featureList
    .map(feature => {
      if (feature.id === payload.id) {
        return payload
      }
      return feature
    }),
  updataSnackbar: (state, payload) => state.snackbar = payload,
  updataConfirm: (state, payload) => state.confirm = payload,
  updataFeatureListStatus: (state, payload) => state.featureList = state.featureList
    .map(feature => {
      let updatedFeatureId = payload.ids.find(item => item === feature.id);
      if (updatedFeatureId) {
        feature.status = payload.status
      }
      return feature;
    })
};
const actions = {
  getAllFeatrues(context) {
    return SystemService.getAllFeatrues().then(features => {
      context.commit('setFeatureList', features);
      return features;
    })
  },
  saveFeature(context, payload) {
    return SystemService.saveFeature(payload).then(res => {
      if (payload.id) { // update
        context.commit('updataFeatureList', payload);
      } else { //insert
        payload.id = res;
        payload.pid.length > 0 ? payload.level = 2 : payload.level = 1;
        context.commit('pushFeatureList', payload);
      }
      context.dispatch('getAllFeatrue');
    })
  },
  changeFeatureStatus(context, payload) {
    return SystemService.changeFeatureStatus(payload).then(() => {
      context.commit('updataFeatureListStatus', payload);
    });
  },
  showSnackbar(context, payload) {
    let snackbar = context.getters.snackbarOptions;
    if (typeof payload === 'string') {
      snackbar.text = payload;
      snackbar.isVisible = true;
      context.commit('updataSnackbar', snackbar);
    }
  },
  hideSnackbar(context) {
    let snackbar = context.getters.snackbarOptions;
    snackbar.isVisible = false;
    context.commit('updataSnackbar', snackbar);
  },
  showConfirm(context, payload) {
    let confirm = context.getters.confirmOptions;
    if (typeof payload === 'string') {
      confirm.text = payload;
      confirm.isVisible = true;
      context.commit('updataConfirm', confirm);
    }
  },
  hideConfirm(context) {
    let confirm = context.getters.confirmOptions;
    confirm.isVisible = false;
    context.commit('updataConfirm', confirm);
  },
  getAllRoles(context) {
    return SystemService.getAllRoles().then(roles => {
        context.commit('setRolesList', roles);
      return roles;
    })
  },
  deleteRole(context, id) {
    return SystemService.deleteRole(id).then(() => {
      console.log('删除成功');
    });
  },
  saveRole(context, role) {
    return SystemService.saveRole(role).then(() => {
      console.log('saved');
    });
  }

};

export default {
  state,
  getters,
  mutations,
  actions
};
