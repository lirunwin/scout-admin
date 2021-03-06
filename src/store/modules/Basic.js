import BasicService from '@/services/BasicService';

import ST from '@/mockdata/scoreTags';

const state = {
  scoreTags: ST,
  positions: [],
  topLevelPositions: [],
  specialTags: [],
  missionTags: [],
  forwardLinks: [],
  metroInfos: [],
  commercialDistricts: []
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

const updataState = (state, stateName, payload) => {
  let tag = state[stateName].find(tag => tag.id = payload.id);
  if (tag) {
    state[stateName] = state[stateName].map(item => {
      if (item.id === payload.id) {
        return payload;
      }
      return item;
    });
  } else {
    state[stateName].unshift(payload);
  }
};

const removeItemsStatus = (state, name, {ids, status}) => {
  ids.map(id => {
    let tag = state[name].find(item => item.id === id);
    if (tag) {
      tag.status = status;
    }
  });
};

const mutations = {
  updateScoreTags: (state, payload) => state.scoreTags = state.scoreTags.concat(payload),
  updateScoreTag: (state, payload) => updataState(state, 'scoreTags', payload),
  resetScoreTags: (state) => state.scoreTags = [],
  removeDeprecatedScoreTags: (state, payload) => removeItemsStatus(state, 'scoreTags', payload),

  //职位
  updatePositions: (state, payload) => state.positions = state.positions.concat(payload),
  updatePosition: (state, payload) => updataState(state, 'positions', payload),
  pushToTopLevelPositions: (state, payload) => state.pushToTopLevelPositions.push(payload),
  resetPositions: (state) => state.positions = [],
  removeDeprecatedPositions: (state, payload) => removeItemsStatus(state, 'positions', payload),

  // 特色标签
  updateSpecialTags: (state, payload) => state.specialTags = state.specialTags.concat(payload),
  updateSpecialTag: (state, payload) => updataState(state, 'specialTags', payload),
  resetSpecialTags: (state) => state.specialTags = [],
  removeDeprecatedSpecialTags: (state, payload) => removeItemsStatus(state, 'specialTags', payload),

  // 任务标签
  updateMissionTags: (state, payload) => state.missionTags = state.missionTags.concat(payload),
  updateMissionTag: (state, payload) => updataState(state, 'missionTags', payload),
  resetMissionTags: (state) => state.missionTags = [],
  removeDeprecatedMissionTags: (state, payload) => removeItemsStatus(state, 'missionTags', payload),

  // 跳转链接
  updateForwardLinks: (state, payload) => state.forwardLinks = state.forwardLinks.concat(payload),
  updateForwardLink: (state, payload) => updataState(state, 'forwardLinks', payload),
  resetForwardLinks: (state) => state.forwardLinks = [],
  removeDeprecateForwardLinks: (state, payload) => removeItemsStatus(state, 'forwardLinks', payload),

  // 地铁信息
  updateMetroInfos: (state, payload) => state.metroInfos = state.metroInfos.concat(payload),
  updateMetroInfo: (state, payload) => updataState(state, 'metroInfos', payload),
  resetMetroInfos: (state) => state.metroInfos = [],
  removeDeprecateMetroInfos: (state, payload) => removeItemsStatus(state, 'metroInfos', payload),

  // 商区信息
  updateCommercialDistricts: (state, payload) => state.commercialDistricts = state.commercialDistricts.concat(payload),
  updateCommercialDistrict: (state, payload) => updataState(state, 'commercialDistricts', payload),
  resetCommercialDistricts: (state) => state.commercialDistricts = [],
  removeDeprecateCommercialDistricts: (state, payload) => removeItemsStatus(state, 'commercialDistricts', payload),
};

const commitUpdateState = ({commit}, name, payload, newState) => {
  if (payload.pageindex === 1) {
    commit(`reset${name}`);
  }
  commit(`update${name}`, newState || []);
  return newState;
};
const commitUpdateStateElement = (context, name, newValue, res) => {
  if (!newValue.id) {
    newValue.id = res.data;
  }
  context.dispatch('showSnackbar', res.msg);
  context.commit(`update${name}`, newValue);
  return newValue;
};

const commitUpdateStateElementStatus = (context, name, payload, res) => {
  context.commit(`removeDeprecated${name}`, payload);
  context.dispatch('showSnackbar', res.msg);
  return res;
}

const actions = {

  resetBasicInfoState(context, stateName) {
    context.commit(`reset${stateName}`);
    return 'done';
  },


  // 评分标签
  getScoreTags(context, payload) {
    return BasicService.getScoreTags(payload).then(res => commitUpdateState(context, 'ScoreTags', payload, res.content));
  },
  addOrUpdataScoreTag(context, payload) {
    return BasicService.addOrUpdataScoreTag(payload).then(res => commitUpdateStateElement(context, 'ScoreTag', payload, res));
  },
  updataScoreTagStatus(context, payload) {
    return BasicService.updataScoreTagStatus(payload).then(res => commitUpdateStateElementStatus(context, 'ScoreTags', payload, res));
  },



  // 职位类型
  // pushToTopLevelPositions
  getTopLevelPositions(context) {
    return BasicService.getPositions({
      pageindex: 1,
      pagesize: '-1',
      pid: 0
    }).then(positions => {
      context.commit('updateTopLevelPositions', positions.content);
    });
  },
  getPositions(context, payload) {
    return BasicService.getPositions(payload).then(res => commitUpdateState(context, 'Positions', payload, res.content));
  },
  addOrUpdataPosition(context, payload) {
    return BasicService.addOrUpdataPosition(payload).then(res => commitUpdateStateElement(context, 'Position', payload, res));
  },
  updataPositionStatus(context, payload) {
    return BasicService.updataPositionStatus(payload).then(res => commitUpdateStateElementStatus(context, 'Positions', payload, res));
  },

  // 特色标签
  getSpecialTags(context, payload) {
    return BasicService.getSpecialTags(payload).then(res => commitUpdateState(context, 'SpecialTags', payload, res.content));
  },
  addOrUpdataSpecialTag(context, payload) {
    return BasicService.addOrUpdataSpecialTag(payload).then(res => commitUpdateStateElement(context, 'SpecialTag', payload, res));
  },
  updataSpecialTagStatus(context, payload) {
    return BasicService.updataSpecialTagStatus(payload).then(res => commitUpdateStateElementStatus(context, 'SpecialTags', payload, res));
  },

  // 任务标签
  getMissionTags(context, payload) {
    return BasicService.getMissionTags(payload).then(res => commitUpdateState(context, 'MissionTags', payload, res.content));
  },
  addOrUpdataMissionTag(context, payload) {
    return BasicService.addOrUpdataMissionTag(payload).then(res => commitUpdateStateElement(context, 'MissionTag', payload, res));
  },
  updataMissionTagStatus(context, payload) {
    return BasicService.updataMissionTagStatus(payload).then(res => commitUpdateStateElementStatus(context, 'MissionTags', payload, res));
  },

  //跳转链接
  getForwardLinks(context, payload) {
    return BasicService.getForwardLinks(payload).then(res => commitUpdateState(context, 'ForwardLinks', payload, res.content));
  },
  addOrUpdataForwardLink(context, payload) {
    return BasicService.addOrUpdataForwardLink(payload).then(res => commitUpdateStateElement(context, 'ForwardLink', payload, res));
  },
  updataForwardLinkStatus(context, payload) {
    return BasicService.updataForwardLinkStatus(payload).then(res => commitUpdateStateElementStatus(context, 'ForwardLinks', payload, res));
  },

  // 地铁
  getMetroInfos(context, payload) {
    return BasicService.getMetroInfos(payload).then(res => commitUpdateState(context, 'MetroInfos', payload, res.content));
  },
  addOrUpdataMetroInfo(context, payload) {
    return BasicService.addOrUpdataMetroInfo(payload).then(res => commitUpdateStateElement(context, 'MetroInfo', payload, res));
  },
  updataMetroInfoStatus(context, payload) {
    return BasicService.updataMetroInfoStatus(payload).then(res => commitUpdateStateElementStatus(context, 'MetroInfos', payload, res));
  },

  // 商圈
  getCommercialDistricts(context, payload) {
    return BasicService.getCommercialDistricts(payload).then(res => commitUpdateState(context, 'CommercialDistricts', payload, res.content));
  },
  addOrUpdataCommercialDistrict(context, payload) {
    return BasicService.addOrUpdataCommercialDistrict(payload).then(res => commitUpdateStateElement(context, 'CommercialDistrict', payload, res));
  },
  updataCommercialDistrictStatus(context, payload) {
    return BasicService.updataCommercialDistrictStatus(payload).then(res => commitUpdateStateElementStatus(context, 'CommercialDistricts', payload, res));
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
