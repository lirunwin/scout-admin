import SystemService from '@/services/SystemService';
const state = {
  featureList: [{
      "id": "1528197070314154",
      "pid": "0",
      "funname": "系统管理",
      "funtype": "FUNTYPE_JZSYSTEM",
      "funcode": "system",
      "url": "/ccav",
      "icon": "lock",
      "sort": 0,
      "status": "DATA_DISABLED",
      "level": 1,
      "children": [{
          "id": "1528197244441425",
          "pid": "1528197070314154",
          "funname": "功能模块",
          "funtype": "FUNTYPE_JZSYSTEM",
          "funcode": "system_function",
          "url": "/system/feature",
          "icon": "lock",
          "sort": 1,
          "status": "DATA_DISABLED",
          "level": 2
        },
        {
          "id": "1528197290847263",
          "pid": "1528197070314154",
          "funname": "用户角色",
          "funtype": "FUNTYPE_JZSYSTEM",
          "funcode": "system_role",
          "url": "/ccav",
          "icon": "lock",
          "sort": 2,
          "status": "DATA_DISABLED",
          "level": 2
        }
      ]
    },
    {
      "id": "1528197244441425",
      "pid": "1528197070314154",
      "funname": "功能模块",
      "funtype": "FUNTYPE_JZSYSTEM",
      "funcode": "system_function",
      "url": "/system/feature",
      "icon": "lock",
      "sort": 1,
      "status": "DATA_DISABLED",
      "level": 2
    },
    {
      "id": "1528197290847263",
      "pid": "1528197070314154",
      "funname": "用户角色",
      "funtype": "FUNTYPE_JZSYSTEM",
      "funcode": "system_role",
      "url": "/ccav",
      "icon": "lock",
      "sort": 2,
      "status": "DATA_DISABLED",
      "level": 2
    },
    {
      "id": "1529305859771348",
      "pid": "0",
      "funname": "招聘信息",
      "funtype": null,
      "funcode": "asdsad",
      "url": "/hire",
      "icon": "face",
      "sort": 2,
      "status": "DATA_DISABLED",
      "level": 1,
      "children": [{
        "id": "1529389754869412",
        "pid": "1529305859771348",
        "funname": "测试C",
        "funtype": null,
        "funcode": "12321321321",
        "url": "/test/sdsa",
        "icon": "",
        "sort": 7,
        "status": "DATA_DISABLED",
        "level": 2
      }]
    },
    {
      "id": "1529389754869412",
      "pid": "1529305859771348",
      "funname": "测试C",
      "funtype": null,
      "funcode": "12321321321",
      "url": "/test/sdsa",
      "icon": "",
      "sort": 7,
      "status": "DATA_DISABLED",
      "level": 2
    },
    {
      "id": "1529380734829327",
      "pid": "0",
      "funname": "test1",
      "funtype": null,
      "funcode": "12321321q",
      "url": "/test",
      "icon": "",
      "sort": 3,
      "status": "DATA_DISABLED",
      "level": 1
    }
  ],
  sideBar: [],
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
  }
};
const getters = {
  featureList: state => state.featureList,
  featureParents: state => state.featureList.filter(feature => feature.level === 1),
  sideBar: state => state.featureList.filter(feature => feature.level === 1).map(parent => {
    let children = state.featureList.filter(child => parent.id === child.pid);
    if (children.length > 0) {
      parent.children = children;
    }
    return parent;
  }),
  snackbarOptions: state => state.snackbar,
  confirmOptions: state => state.confirm
};
const mutations = {
  setFeatureList: (state, payload) => state.featureList = payload,
  pushFeatureList: (state, payload) => state.featureList.push(payload),
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
  getAllFeatrue(context) {
    return SystemService.getAllFeatrue().then(featureList => {
      context.commit('setFeatureList', featureList);
      return featureList;
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
