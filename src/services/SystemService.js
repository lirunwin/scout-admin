import Api from '@/services/Api';

export default {

    getAllFeatrue: () => Api.get('system/getAllFunction'),

    saveFeature: (data) => Api.post('system/saveFunction', data),

    changeFeatureStatus: (data) => Api.post('system/setFunction', data)

  };
