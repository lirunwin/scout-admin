import BasicService from '@/services/BasicService';
const state = {
  // scoreTags: [{
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '1',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '刻录机啊',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_USER_COMPANY',
  //     id: '2',
  //     source: 12,
  //     status: 'DATA_NORMAL',
  //     tagname: '大是大非',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_USER_COMPANY',
  //     id: '3',
  //     source: 12,
  //     status: 'DATA_NORMAL',
  //     tagname: '如何饿饿',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '4',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '5',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视1',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '6',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视2',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '7',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视7',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '8',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视8',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '9',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视9',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '10',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视10',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '11',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视11',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '12',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视12',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '13',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视13',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '14',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视14',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '15',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视15',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '16',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视16',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '17',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视17',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '18',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视18',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '19',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视19',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '20',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视20',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '21',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视21',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '22',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视22',
  //     tagsource: 22,
  //   },
  //   {
  //     etagtype: 'EVALUATION_COMPANY_USER',
  //     id: '23',
  //     source: 12,
  //     status: 'DATA_DISABLED',
  //     tagname: '更好看电视23',
  //     tagsource: 22,
  //   }
  // ],
  scoreTags:[],
  positions:[],
  topLevelPositions:[],
  specialTags:[],
  missionTags:[],
  forwardLinks:[],
  metroInfos:[],
  commercialDistricts:[]
};
const getters = {
  scoreTags: state => state.scoreTags,
  positions: state => state.positions,
  topLevelPositions: state => state.topLevelPositions,
  specialTags: state => state.specialTags,
  missionTags: state => state.missionTags,
  forwardLinks: state => state.forwardLinks,
  metroInfos: state => state.metroInfos,
  commercialDistricts: state => state.commercialDistricts
};
const mutations = {
  updateScoreTags: (state, payload) => state.scoreTags = state.scoreTags.concat(payload),
  pushToScoreTags: (state, payload) => state.scoreTags.push(payload),
  resetScoreTags: (state) => state.scoreTags = [],

  updatePositions: (state, payload) => state.positions = state.positions.concat(payload),
  pushToPositions: (state, payload) => state.positions.push(payload),
  pushToTopLevelPositions: state => (state, payload) => state.pushToTopLevelPositions.push(payload),
  resetPositions: (state) => state.positions = [],


  updateSpecialTags: (state, payload) => state.specialTags = state.specialTags.concat(payload),
  pushToSpecialTags: (state, payload) => state.specialTags.push(payload),
  resetSpecialTags: (state) => state.specialTags = [],

  updateMissionTags: (state, payload) => state.missionTags = state.missionTags.concat(payload),
  pushToMissionTags: (state, payload) => state.missionTags.push(payload),
  resetMissionTags: (state) => state.missionTags = [],

  updateForwardLinks: (state, payload) => state.forwardLinks = state.forwardLinks.concat(payload),
  pushToForwardLinks: (state, payload) => state.forwardLinks.push(payload),
  resetForwardLinks: (state) => state.forwardLinks = [],

  updateMetroInfos: (state, payload) => state.metroInfos = state.metroInfos.concat(payload),
  pushToMetroInfos: (state, payload) => state.metroInfos.push(payload),
  resetMetroInfos: (state) => state.metroInfos = [],

  updateCommercialDistricts: (state, payload) => state.commercialDistricts = state.commercialDistricts.concat(payload),
  pushToCommercialDistricts: (state, payload) => state.commercialDistricts.push(payload),
  resetCommercialDistricts: (state) => state.commercialDistricts = [],
};
const actions = {
  // 评分标签
  getScoreTags(context, payload) {
    return BasicService.getScoreTags(payload).then(scoreTags => {
      if(payload.pageindex === 1) {
        context.commit('resetScoreTags');
      }
      context.commit('updateScoreTags', scoreTags.content);
      return scoreTags;
    });
  },
  addOrUpdataScoreTag(context, payload) {
    return BasicService.addOrUpdataScoreTag(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToPositions', payload);
      }
      return payload;
    });
  },
  updataPositionStatus(context, payload) {
    return BasicService.updataPositionStatus(payload).then(res => {
      context.commit('removeDdeprecatedPosition', res.msg);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetScoreTags(context) {
    context.commit('resetScoreTags');
    return 'done';
  },


  // 职位类型
  getPositions(context, payload) {
    return BasicService.getPositions(payload).then(positions => {
      context.commit('updatePositions', positions.content);
    });
  },
  // pushToTopLevelPositions
  getTopLevelPositions(context) {
    return BasicService.getPositions({
      pageindex:1,
      pagesize:'-1',
      pid: 0
    }).then(positions => {
      context.commit('updateTopLevelPositions', positions.content);
    });
  },

  addOrUpdataPosition(context, payload) {
    return BasicService.addOrUpdataPosition(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToScoreTags', payload);
        if(payload.pid) {
          context.commit('pushToTopLevelPositions', payload);
        }
      }
      return payload;
    });
  },

  updataPositionStatus(context, payload) {
    return BasicService.updataPositionStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetScoreTags(context) {
    context.commit('resetScoreTags');
    return 'done';
  },

  // 特色标签
  getSpecialTags(context, payload) {
    return BasicService.getSpecialTags(payload).then(specialTags => {
      context.commit('updateSpecialTags', specialTags.content);
    });
  },
  addOrUpdataSpecialTag(context, payload) {
    return BasicService.addOrUpdataSpecialTag(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToScoreTags', payload);
      }
      return payload;
    });
  },
  updataSpecialTagStatus(context, payload) {
    return BasicService.updataSpecialTagStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetSpecialTags(context) {
    context.commit('resetSpecialTags');
    return 'done';
  },

  getMissionTags(context, payload) {
    return BasicService.getMissionTags(payload).then(missionTags => {
      context.commit('updateMissionTags', missionTags.content);
    });
  },
  addOrUpdataMissionTag(context, payload) {
    return BasicService.addOrUpdataMissionTag(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToMissionTags', payload);
      }
      return payload;
    });
  },
  updataMissionTagStatus(context, payload) {
    return BasicService.updataMissionTagStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetMissionTags(context) {
    context.commit('resetMissionTags');
    return 'done';
  },



  getForwardLinks(context, payload) {
    return BasicService.getForwardLinks(payload).then(links => {
      context.commit('updateForwardLinks', enterprises.content);
      return links;
    });
  },
  addOrUpdataForwardLink(context, payload) {
    return BasicService.addOrUpdataForwardLink(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToForwardLinks', payload);
      }
      return payload;
    });
  },
  updataForwardLinkStatus(context, payload) {
    return BasicService.updataForwardLinkStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetForwardLinks(context) {
    context.commit('resetForwardLinks');
    return 'done';
  },



  getMetroInfos(context, payload) {
    return BasicService.getMetroInfos(payload).then(metroInfo => {
      context.commit('updateMetroInfos', metroInfo.content);
      return metroInfos;
    });
  },
  addOrUpdataMetroInfo(context, payload) {
    return BasicService.addOrUpdataMetroInfo(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToForwardLinks', payload);
      }
      return payload;
    });
  },
  updataMetroInfoStatus(context, payload) {
    return BasicService.updataMetroInfoStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetMetroInfos(context) {
    context.commit('resetMetroInfos');
    return 'done';
  },

  getCommercialDistricts(context, payload) {
    return BasicService.getCommercialDistricts(payload).then(commercialDistricts => {
      context.commit('updateCommercialDistricts', commercialDistricts.content);
    });
  },
  addOrUpdataCommercialDistrict(context, payload) {
    return BasicService.addOrUpdataCommercialDistrict(payload).then(res => {
      context.dispatch('showSnackbar', res.msg);
      if (!payload.id) {
        payload.id = res;
        context.commit('pushToCommercialDistricts', payload);
      }
      return payload;
    });
  },
  updataCommercialDistrictStatus(context, payload) {
    return BasicService.updataCommercialDistrictStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetCommercialDistricts(context) {
    context.commit('resetCommercialDistricts');
    return 'done';
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
