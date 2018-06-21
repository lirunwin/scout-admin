import Api from '@/services/Api';

export default {

    // signIn: () => Api.post('../Login/login'),
    //
    // signUp: () => Api.get('../Login/register'),
    //
    // logout: () => Api.get('loginOut'),

    getAllEnterprises: (data) => Api.post('companyManagement/getCompanyDetailsInfoForList', data),

    getScoreLog: (data) => Api.post('companyManagement/getCompanyReputationRecordInfo', data),

    getBalanceLog: (data) => Api.post('companyManagement/getCompanyFinanceInfo', data),

    checkEnterprise: (data) => Api.post('companyManagement/checkCompany', data)

  };
