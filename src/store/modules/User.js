import UserService from '@/services/UserService';
const state = {
  enterprises: [{
      'comid': '1528708466833525',
      'comname': '宇宙武器公司',
      'userid': '22222222',
      'accountnum': '18231231156',
      'nature': 'COM_NATURE_1',
      'businesslevel': '2',
      'contactsname': '啊阿斯顿',
      'contactstel': '123213213',
      'provinceid': '1',
      'provincename': null,
      'cityid': '2',
      'cityname': null,
      'countyid': '3',
      'countyname': null,
      'address': '玉林路12号',
      'comstatus': 'COMP_STATUS_CHANGE',
      'marginmoney': 123213213,
      'reputation': '1.00',
      'parttimenum': 1,
      'practicenum': 2,
      'totalnum': 3,
      'createtime': '2018-06-11',
      'lastupdatetime': null,
      'officephone': '12735462734',
      'comemial': 'yunzhou@kill.com',
      'introduce': '杀一儆百',
      'businessLicensefile': '123213213213'
    },
    {
      'comid': '1529297826957242',
      'comname': '小猪佩奇有限公司',
      'userid': null,
      'accountnum': null,
      'nature': 'COM_NATURE_1',
      'businesslevel': '1',
      'contactsname': 'asdsad',
      'contactstel': '123213213',
      'provinceid': '2',
      'provincename': null,
      'cityid': null,
      'cityname': null,
      'countyid': null,
      'countyname': null,
      'address': '玉林路12号',
      'comstatus': 'COMP_STATUS_NEW',
      'marginmoney': null,
      'reputation': '0.00',
      'parttimenum': 0,
      'practicenum': 0,
      'totalnum': 0,
      'createtime': '2018-06-18',
      'lastupdatetime': null,
      'officephone': null,
      'comemial': 'yunzhou@kill.com',
      'introduce': '杀一儆百',
      'businessLicensefile': null
    }
  ],
  scoreLog: [],
  balanceLog: [],
  infoChangeLog: [{
      'comid': '1528708466833525',
      'comname': '宇宙武器公司',
      'userid': '22222222',
      'accountnum': '18231231156',
      'nature': 'COM_NATURE_1',
      'businesslevel': '2',
      'contactsname': '啊阿斯顿',
      'contactstel': '123213213',
      'provinceid': '1',
      'provincename': null,
      'cityid': '2',
      'cityname': null,
      'countyid': '3',
      'countyname': null,
      'address': '玉林路12号',
      'comstatus': 'COMP_STATUS_CHANGE',
      'marginmoney': 123213213,
      'reputation': '1.00',
      'parttimenum': 1,
      'practicenum': 2,
      'totalnum': 3,
      'createtime': '2018-06-11',
      'lastupdatetime': null,
      'officephone': '12735462734',
      'comemial': 'yunzhou@kill.com',
      'introduce': '杀一儆百',
      'businessLicensefile': 'http://docs.ebdoor.com/Image/CompanyCertificate/11/114757.jpg'
    },
    {
      'comid': '1529297826957242',
      'comname': '小猪佩奇有限公司',
      'userid': null,
      'accountnum': null,
      'nature': 'COM_NATURE_1',
      'businesslevel': '1',
      'contactsname': 'asdsad',
      'contactstel': '123213213',
      'provinceid': '2',
      'provincename': null,
      'cityid': null,
      'cityname': null,
      'countyid': null,
      'countyname': null,
      'address': '玉林路12号',
      'comstatus': 'COMP_STATUS_NEW',
      'marginmoney': null,
      'reputation': '0.00',
      'parttimenum': 0,
      'practicenum': 0,
      'totalnum': 0,
      'createtime': '2018-06-18',
      'lastupdatetime': null,
      'officephone': null,
      'comemial': 'yunzhou@kill.com',
      'introduce': 'introduceintroduceintroduceintroduce',
      'businessLicensefile': 'http://img3.jc001.cn/img/544/1737544/1601/16569ca42a785ff.jpg'
    }
  ],
};
const getters = {
  enterprises: state => state.enterprises,
  scoreLog: state => state.scoreLog,
  balanceLog: state => state.balanceLog,
  infoChangeLog: state => state.infoChangeLog,
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
  reviewEnterprise(context, payload) {
    return UserService.reviewEnterprise(payload).then((res) => {
      //updata enterprise list
      return res;
    });
  },
  getInfoChangeLog(context, payload) {
    return UserService.getInfoChangeLog(payload).then((res) => {
      return res;
    });
  },
  updataEnterpriseInfo(context, payload) {
    return UserService.updataEnterpriseInfo(payload).then((res) => {
      return res;
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
