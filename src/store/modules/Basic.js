import BasicService from '@/services/BasicService';
const state = {
  scoreTags: [{
    etagtype: "EVALUATION_COMPANY_USER",
    id: "1",
    source: 12,
    status: "DATA_NORMAL",
    tagname: "效率差",
    tagsource: 22,
  }],
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
  updateScoreTags: (state, payload) => state.scoreTags = payload,
  pushScoreTag: (state, payload) => state.scoreTags = state.scoreTags.push(payload),
  updatePositions: (state, payload) => state.positions = payload,
  updateSpecialTags: (state, payload) => state.specialTags = payload,
  updateMissionTags: (state, payload) => state.missionTags = payload,
  updateForwardLinks: (state, payload) => state.forwardLinks = payload,
  updateMetroInfo: (state, payload) => state.metroInfo = payload,
  updateCommercialDistrict: (state, payload) => state.commercialDistrict = payload
};
const actions = {
  getScoreTags(context, payload) {
    return BasicService.getScoreTags(payload).then((scoreTags => {
      context.commit('updateScoreTags', scoreTags.content);
    }));
  },
  addOrUpdataScoreTag(context, payload) {
    return BasicService.addOrUpdataScoreTag(payload).then((res => {
      context.commit('pushScoreTag', scoreTags);
    }));
  },
  updataScoreTagStatus(context, payload) {
    return BasicService.updataScoreTagStatus(payload).then((res => {
      // context.commit('pushScoreTag', scoreTags);
    }));
  },
  getPositions(context, payload) {
    return BasicService.getPositions(payload).then((enterprises => {
      context.commit('updatePositions', enterprises.content);
    }));
  },
  getSpecialTags(context, payload) {
    return BasicService.getSpecialTags(payload).then((enterprises => {
      context.commit('updateSpecialTags', enterprises.content);
    }));
  },
  getMissionTags(context, payload) {
    return BasicService.getMissionTags(payload).then((enterprises => {
      context.commit('updateMissionTags', enterprises.content);
    }));
  },
  getLinks(context, payload) {
    return BasicService.getLinks(payload).then((enterprises => {
      context.commit('updateForwardLinks', enterprises.content);
    }));
  },
  getMetroInfo(context, payload) {
    return BasicService.getMetroInfo(payload).then((enterprises => {
      context.commit('updateMetroInfo', enterprises.content);
    }));
  },
  getCommercialDistricts(context, payload) {
    return BasicService.getCommercialDistricts(payload).then((enterprises => {
      context.commit('updateCommercialDistrict', enterprises.content);
    }));
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
