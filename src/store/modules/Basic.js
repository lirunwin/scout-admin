import BasicService from '@/services/BasicService';
const state = {
  scoreTags: [{
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '1',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '刻录机啊',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_USER_COMPANY',
      id: '2',
      source: 12,
      status: 'DATA_NORMAL',
      tagname: '大是大非',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_USER_COMPANY',
      id: '3',
      source: 12,
      status: 'DATA_NORMAL',
      tagname: '如何饿饿',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '4',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '5',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视1',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '6',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视2',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '7',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视7',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '8',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视8',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '9',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视9',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '10',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视10',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '11',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视11',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '12',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视12',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '13',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视13',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '14',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视14',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '15',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视15',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '16',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视16',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '17',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视17',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '18',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视18',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '19',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视19',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '20',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视20',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '21',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视21',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '22',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视22',
      tagsource: 22,
    },
    {
      etagtype: 'EVALUATION_COMPANY_USER',
      id: '23',
      source: 12,
      status: 'DATA_DISABLED',
      tagname: '更好看电视23',
      tagsource: 22,
    }
  ],
};
const getters = {
  scoreTags: state => state.scoreTags,
  positions: state => state.positions,
  specialTags: state => state.specialTags,
  missionTags: state => state.missionTags,
  forwardLinks: state => state.forwardLinks,
  metroInfo: state => state.metroInfo,
  commercialDistrict: state => state.commercialDistrict
};
const mutations = {
  updateScoreTags: (state, payload) => state.scoreTags = state.scoreTags.concat(payload),
  pushToScoreTags: (state, payload) => state.scoreTags.push(payload),
  resetScoreTags: (state) => state.scoreTags = [],

  updatePositions: (state, payload) => state.positions = payload,
  updateSpecialTags: (state, payload) => state.specialTags = payload,
  updateMissionTags: (state, payload) => state.missionTags = payload,
  updateForwardLinks: (state, payload) => state.forwardLinks = payload,
  updateMetroInfo: (state, payload) => state.metroInfo = payload,
  updateCommercialDistrict: (state, payload) => state.commercialDistrict = payload
};
const actions = {
  getScoreTags(context, payload) {
    return BasicService.getScoreTags(payload).then(scoreTags => {
      context.commit('updateScoreTags', scoreTags.content);
      return scoreTags;
    });
  },
  addOrUpdataScoreTag(context, payload) {
    if (!payload.id) {
      payload.id = 'res';
      context.commit('pushToScoreTags', payload);
    }
    // return BasicService.addOrUpdataScoreTag(payload).then(res => {
    //   if (!payload.id) {
    //     payload.id = res;
    //     context.commit('pushToScoreTags', payload);
    //   }
    //   return payload;
    // });
  },
  updataScoreTagStatus(context, payload) {
    return BasicService.updataScoreTagStatus(payload).then(res => {
      // context.commit('pushScoreTag', scoreTags);
      return res;
    });
  },
  resetScoreTags(context) {
    context.commit('resetScoreTags');
    return 'done';
  },
  getPositions(context, payload) {
    return BasicService.getPositions(payload).then(enterprises => {
      context.commit('updatePositions', enterprises.content);
    });
  },
  getSpecialTags(context, payload) {
    return BasicService.getSpecialTags(payload).then(enterprises => {
      context.commit('updateSpecialTags', enterprises.content);
    });
  },
  getMissionTags(context, payload) {
    return BasicService.getMissionTags(payload).then(enterprises => {
      context.commit('updateMissionTags', enterprises.content);
    });
  },
  getLinks(context, payload) {
    return BasicService.getLinks(payload).then(enterprises => {
      context.commit('updateForwardLinks', enterprises.content);
    });
  },
  getMetroInfo(context, payload) {
    return BasicService.getMetroInfo(payload).then(enterprises => {
      context.commit('updateMetroInfo', enterprises.content);
    });
  },
  getCommercialDistricts(context, payload) {
    return BasicService.getCommercialDistricts(payload).then(enterprises => {
      context.commit('updateCommercialDistrict', enterprises.content);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
