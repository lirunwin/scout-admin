import UserService from '@/services/UserService';
const state = {
  enterprises: [],
  scoreLog:[],
  balanceLog:[]
};
const getters = {
  enterprises: state => state.enterprises,
  scoreLog: state => state.scoreLog,
  balanceLog: state => state.balanceLog,
};
const mutations = {
  updateEnterprises: (state, payload) => state.enterprises = payload,
  updataScoreLog: (state, payload) => state.scoreLog = payload,
  updataBalanceLog: (state, payload) => state.balanceLog = payload,
};
const actions = {
  getAllEnterprises(context, payload) {
    return UserService.getAllEnterprises(payload).then((enterprises => {
      context.commit('updateEnterprises', enterprises.content);
    }));
  },
  getScoreLog(context, payload) {
    return UserService.getScoreLog(payload).then((scoreLog => {
      context.commit('updataScoreLog', scoreLog.content);
    }));
  },
  getBalanceLog(context, payload) {
    return UserService.getBalanceLog(payload).then((balanceLog => {
      context.commit('updataBalanceLog', balanceLog.content);
    }));
  },
  checkEnterprise(context, payload) {
    return UserService.checkEnterprise(payload).then((res) => {
      //updata enterprise list
      return res
    });
  }

};

export default {
  state,
  getters,
  mutations,
  actions
};
