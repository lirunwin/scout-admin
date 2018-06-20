import Api from '@/services/Api';

export default {

    getAllFeatrues: () => Api.get('system/getAllFunction'),

    saveFeature: (data) => Api.post('system/saveFunction', data),

    changeFeatureStatus: (data) => Api.post('system/setFunction', data),

    getAllRoles: () => Api.get('system/getAllRole'),

    deleteRole: (id) => Api.post('system/deleteRole', {id}),

    saveRole: (data) => Api.post('system/saveRole', data)
  };
