import basic from './basic'
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
        name:'deprecated',
        sort: '2'
      }
    ],
    tablePagination: [5,10,25,{"text":"全部","value":-1}]
  },
  basic
}
