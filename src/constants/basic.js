export default {
  scoreTag: {
    id: '', //
    tagname: '', //标签名称
    source: '', // 评分或难度系数
    tagsource: '', // 标签分值
    etagtype: '', // 评分标签类型
    status: '' // 状态
  },
  constant: [{
    label: '兼职',
    value: 'RECRUITMENT_PARTTIME',
    sort: '0'
  },
  {
    label: '实习',
    value: 'RECRUITMENT_PRACTICE',
    sort: '1'
  }],
  scoreTagTypes: [
    {
      label: '企业评价用户',
      value: 'EVALUATION_COMPANY_USER',
      sort: '0'
    },
    {
      label: '用户评价企业',
      value: 'EVALUATION_USER_COMPANY',
      sort: '1'
    }
  ],
  scoreTagTableHeaders: [
    {
      text: '名称',
      align: 'left',
      sortable: false,
      value: 'tagname'
    },
    {
      text: '类型',
      align: 'left',
      sortable: false,
      value: 'etagtype',
      constant: [true, 'basic.scoreTagTypes']
    },
    {
      text: '分值或难度系数',
      align: 'left',
      sortable: false,
      value: 'tagsource'
    },
    {
      text: '分值',
      align: 'left',
      sortable: false,
      value: 'tagsource'
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      value: 'status',
      action: true,
      constant: [true, 'global.dataStatus']
    }
  ]

};
