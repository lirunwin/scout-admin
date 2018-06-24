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
const commitUpdateState = ({commit}, name, newState) => {
  if (newState.pageindex === 1) {
    commit(`rest${name}`);
  }
  commit(`update${name}`, newState);
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
  // 评分标签
  getScoreTags(context, payload) {
    return BasicService.getScoreTags(payload).then(res => commitUpdateState(context, 'ScoreTags', res.content));
  },
  addOrUpdataScoreTag(context, payload) {
    return BasicService.addOrUpdataScoreTag(payload)
      .then(res => commitUpdateStateElement(context, 'ScoreTag', payload, res));
  },
  updataScoreTagStatus(context, payload) {
    return BasicService.updataScoreTagStatus(payload).then(res => commitUpdateStateElementStatus(context, 'ScoreTags', payload, res));
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
      pageindex: 1,
      pagesize: '-1',
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
        if (payload.pid) {
          context.commit('pushToTopLevelPositions', payload);
        }
      }
      return payload;
    });
  },

  updataPositionStatus(context, payload) {
    return BasicService.updataPositionStatus(payload).then(res => {
      context.commit('removeDeprecatedPositions', payload);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
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
      context.commit('removeDeprecatedSpecialTags', payload);
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
      context.commit('removeDeprecatedMissionTags', payload);
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
      context.commit('updateForwardLinks', links.content);
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
      context.commit('removeDeprecatedForwardLinks', payload);
      context.dispatch('showSnackbar', res.msg);
      return res;
    });
  },
  resetForwardLinks(context) {
    context.commit('resetForwardLinks');
    return 'done';
  },

  getMetroInfos(context, payload) {
    return BasicService.getMetroInfos(payload).then(metroInfos => {
      context.commit('updateMetroInfos', metroInfos.content);
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
      context.commit('removeDeprecatedMetroInfos', payload);
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
      context.commit('removeDeprecatedCommercialDistricts', payload);
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
