import UserService from '@/services/UserService';
const state = {
  userBasicInfo: {},
  userProfile: {}
};
const getters = {
  userBasicInfo: state => state.userBasicInfo,
  userProfile: state => state.userProfile,
  qrcode: state => state.qrcode
};
const mutations = {
  setUserBasicInfo: (state, payload) => state.userBasicInfo = payload,
  setUserProfile: (state, payload) => state.userProfile = payload,
  setQrcode: (state, payload) => state.qrcode = payload
};
const actions = {
  fetchUserBasicInfo(context) {
    UserService.getUserBasicInfo().then((res) => {
      const data = res.data;
      context.commit('setUserBasicInfo', data);
    }).catch(error => {
      console.log(error);
    });
  },
  updateUserWalletAddress(context, payload) {
    alert(`no Api yet!
          payload:"${payload}"`);
  },

  changePassword(context,payload) {
    return UserService.changePassword(payload).then((res) => {
        return res.data;
      }).catch(error => {
        console.log(error);
      });
  },
  changePassword1(context,payload) {
    return UserService.changePassword1(payload).then((res) => {
        return res.data;
      }).catch(error => {
        console.log(error);
      });
  },

  changePhoneNum(context,payload) {
    return UserService.changePhoneNum(payload).then((res) => {
        return res.data;
      }).catch(error => {
        console.log(error);
      });
  },
  logout() {
    UserService.logout().then().catch(error => {
        console.log(error);
      });
  },
  login(payload) {
    return UserService.login(payload).then((res) => {
      return res.data;
    }).catch(error => {
        console.log(error);
      });
  },
  signin(context,payload) {
    return UserService.signin(payload).then((res) => {
      return res.data;
    }).catch(error => {
        console.log(error);
      });
  },
  sendSmsCode() {
    UserService.sendSmsCode().then().catch(error => {
        console.log(error);
      });
  },
  postMessage(context,payload) {
    return UserService.postMessage(payload).then((res) => {
      return res.data;
    }).catch(error => {
        console.log(error);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
