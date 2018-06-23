import Api from '@/services/Api';

export default {

    getCities: (data) => Api.post('common/getArea', data),

    uploadFile: (data)  => Api.post('common/upload',data)

  };
