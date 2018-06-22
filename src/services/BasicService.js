import Api from '@/services/Api';

export default {
    // 评分标签
    getScoreTags: (params) => Api.post('basicManagement/getEvaluationTagsInfo', params),
    addOrUpdataScoreTag: (data) => Api.post('basicManagement/createOrUpdateEvaluationTagsInfo', data),
    updataScoreTagStatus: (data) => Api.post('basicManagement/updateEvaluationTagsStatus', data),

    // 职位类型
    getPositions: (params) => Api.post('basicManagement/getBasisPositionInfo', params),
    addOrUpdataPosition: (data) => Api.post('basicManagement/createOrUpdateBasisPositionInfo', data),
    updataPositionStatus: (data) => Api.post('basicManagement/updateBasisPositionStatus', data),

    // 特殊标签
    getSpecialTags: (params) => Api.post('basicManagement/getBasisFeaturesTagInfo', params),
    addOrUpdataSpecialTag: (data) => Api.post('basicManagement/createOrUpdateBasisFeaturesTagInfo', data),
    updataSpecialTagStatus: (data) => Api.post('basicManagement/updateBasisFeaturesTagStatus', data),

    // 任务标签
    getMissionTags: (params) => Api.post('basicManagement/getBasisTaskTagInfo', params),
    addOrUpdataMissionTag: (data) => Api.post('basicManagement/createOrUpdateBasisTaskTagInfo', data),
    updataMissionTagStatus: (data) => Api.post('basicManagement/updateBasisTaskTagStatus', data),

    // 跳转链接
    getLinks: (params) => Api.post('basicManagement/getBasisLinkInfo', params),
    addOrUpdataLink: (data) => Api.post('basicManagement/createOrUpdateBasisLinkInfo', data),
    updataLinkStatus: (data) => Api.post('basicManagement/deleteBasisLinkInfo', data),

    // 地铁站台
    getMetroInfo: (params) => Api.post('basicManagement/getBasisMetroPlatformInfo', params),
    addOrUpdataMetroInfo: (data) => Api.post('basicManagement/createOrUpdateBasisMetroPlatformInfo', data),
    updataMetroInfoStatus: (data) => Api.post('basicManagement/updateBasisMetroPlatformStatus', data),

    // 商区
    getCommercialDistricts: (params) => Api.post('basicManagement/getBasisBusinessDistrictInfo', params),
    addOrUpdataCommercialDistricts: (data) => Api.post('basicManagement/createOrUpdateBasisBusinessDistrictInfo', data),
    updataCommercialDistrictsStatus: (data) => Api.post('basicManagement/updateBasisBusinessDistrictStatus', data),

  };
