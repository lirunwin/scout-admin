import basic from './basic';
export default {
  global: {
    dataStatus: [{
        label: '正常',
        value: 'DATA_NORMAL',
        name: 'able',
        sort: '0'
      },
      {
        label: '停用',
        value: 'DATA_DISABLED',
        name: 'disable',
        sort: '1'
      },
      {
        label: '删除',
        value: 'DATA_DELETED',
        name: 'deprecated',
        sort: '2'
      }
    ],
    tablePagination: [10,20,50,{'text': '全部','value': -1}],
    jobType: [
      {
        label: '兼职',
        value: 'RECRUITMENT_PARTTIME',
        sort: '0'
      },
      {
        label: '实习',
        value: 'RECRUITMENT_PRACTICE',
        sort: '1'
      }
    ],
  },
  basic
};
