import Api from '@/services/Api';

export default {

    signIn: () => Api().post('../Login/login'),

    signUp: () => Api().get('../Login/register'),

    logout: () => Api().get('loginOut'),

    getEnterpriseList: () => Api().get('../enterpriseList')
    
  };
