import Api from '@/services/Api';

export default {

    login: () => Api().post('../Login/login'),

    signin: () => Api().get('../Login/register'),

    logout: () => Api().get('loginOut'),

    getUserBasicInfo: () => Api().get('member'),

    getUserProfile: () => Api().get('memberInfo'),

    getQrcode: () => Api().get('getQrcode'),

    changePassword: (data) => Api().post('changeL1', data),

    changePassword1: (data) => Api().post('changeL2', data),

    changePhoneNum: (data) => Api().post('changePhone', data),

    sendSmsCode: () => Api().get('sendSmsCode'),

    postMessage: (data) => Api().post('takeMsg', data),
  };
