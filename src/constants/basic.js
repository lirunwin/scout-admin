export default {
  scoreTag: {
    id: '', //
    tagname: '', //标签名称
    source: '', // 评分或难度系数
    tagsource: '', // 标签分值
    etagtype: '', // 评分标签类型
    status: '' // 状态
  },
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
  specialTagTypes: [{
    label: '企业评价用户',
    value: 'EVALUATION_COMPANY_USER',
    sort: '0'
  },
  {
    label: '用户评价企业',
    value: 'EVALUATION_USER_COMPANY',
    sort: '1'
  }],

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
  ],
  positionTableHeaders: [
    {
      text: '职位类型',
      align: 'left',
      sortable: false,
      value: 'recruitmenttype',
      constant: [true, 'basic.positionTypes']
    },
    {
      text: '名称',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: '难度系数',
      align: 'left',
      sortable: false,
      value: 'degree'
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      value: 'status',
      action: true,
      constant: [true, 'global.dataStatus']
    }
  ],
  specialTagTableHeaders: [
    {
      text: '职位类型',
      align: 'left',
      sortable: false,
      value: 'recruitmenttype',
      constant: [true, 'basic.positionTypes']
    },
    {
      text: '名称',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      value: 'status',
      action: true,
      constant: [true, 'global.dataStatus']
    }
  ],
  missionTagTableHeaders: [
    {
      text: '名称',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: '标签业务',
      align: 'left',
      sortable: false,
      value: 'business',
      // constant: [true, 'basic.positionTypes']
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      value: 'status',
      action: true,
      constant: [true, 'global.dataStatus']
    }
  ],
  forwardLinkTableHeaders: [
    {
      text: '标题',
      align: 'left',
      sortable: false,
      value: 'title'
    },
    {
      text: '类型',
      align: 'left',
      sortable: false,
      value: 'linktype',
      constant: [true, 'basic.linktypes']
    },
    {
      text: '跳转链接',
      align: 'left',
      sortable: false,
      value: 'jumpurl'
    },
    {
      text: '图片',
      align: 'left',
      sortable: false,
      value: 'imgpath'
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      action: true,
      value: 'status'
    },
  ],
  forwardLinksTypes:[{
    label: '引导页',
    value: 'LEAD_PAGE',
    sort: '0'
  },
  {
    label: '合作伙伴',
    value: 'COR_PARTNER',
    sort: '1'
  }],
  metroInfoTableHeaders: [
    {
      text: '地区',
      align: 'left',
      sortable: false,
      value: 'areaid'
    },
    {
      text: '线路',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: '地铁线',
      align: 'left',
      sortable: false,
      value: 'metroid'
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      action: true,
      value: 'status'
    },
  ],
  commercialDistrictTableHeaders: [
    {
      text: '地区',
      align: 'left',
      sortable: false,
      value: 'areaid'
    },
    {
      text: '商区名称',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: '状态',
      align: 'left',
      sortable: false,
      action: true,
      value: 'business'
    }
  ]
};
