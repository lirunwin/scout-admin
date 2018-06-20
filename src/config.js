export default {
  projectName: '懒虫动动后台管理系统',
  baseURL: 'http://192.168.1.4:8085/',
  // baseURL:'http://192.168.1.4:8085/',
  // baseURL:'http://192.168.0.103:8085/',
  prototype: 'https://mco2d9.axshare.com/',

  constant: {
    // 数据状态
    share: {
      data: { // value不能更改
        DATA_NORMAL: {
          name: '正常',
          value: 1
        },
        DATA_DISABLED: {
          name: '停用',
          value: 2
        },
        DATA_DELETED: {
          name: '删除',
          value: 3
        },
      }
    },
    user: {
      enterprise: {
        status: [{   //企业状态
            label: '新入驻',
            value: 'COMP_STATUS_NEW',
            sort: '0'
          },
          {
            label: '正常',
            value: 'COMP_STATUS_NORMAL',
            sort: '0'
          },
          {
            label: '变更中',
            value: 'COMP_STATUS_CHANGE',
            sort: '0'
          },
          {
            label: '入驻审核失败',
            value: 'COMP_STATUS_NEW_CHECK_FAIL',
            sort: '0'
          },
          {
            label: '变更审核失败',
            value: 'COMP_STATUS_CHANGE_CHECK_FAIL',
            sort: '0'
          }
        ],
        tabs: [
          {
            label: '基本信息',
            value: 'info',
            sort: '0'
          },
          {
            label: '信誉记录',
            value: 'scoreLog',
            sort: '1'
          },
          {
            label: '保证金',
            value: 'depositLog',
            sort: '2'
          },
          {
            label: '信息变更',
            value: 'infoChangeLog',
            sort: '3'
          },
          {
            label: '发起评价',
            value: 'comments_out',
            sort: '4'
          },
          {
            label: '收到评价',
            value: 'comments_in',
            sort: '5'
          }
        ],
        nature: [{   //企业性质
            label: '国有企业',
            value: 'COM_NATURE_1',
            sort: '0'
          },
          {
            label: '集体企业',
            value: 'COM_NATURE_2',
            sort: '0'
          },
          {
            label: '有限责任公司',
            value: 'COM_NATURE_3',
            sort: '0'
          },
          {
            label: '股份有限公司',
            value: 'COM_NATURE_4',
            sort: '0'
          },
          {
            label: '私营企业',
            value: 'COM_NATURE_5',
            sort: '0'
          },
          {
            label: '中外合资企业',
            value: 'COM_NATURE_6',
            sort: '0'
          },
          {
            label: '外商投资企业',
            value: 'COM_NATURE_7',
            sort: '0'
          }],
        level: [{
            label: '普通客户',
            value: 'COM_LEVEL_GENERAL',
            sort: '0'
          },
          {
            label: 'VIP客户',
            value: 'COM_LEVEL_VIP',
            sort: '0'
          },
        ],
        orderBy: [{
            label: '默认排序',
            value: 'createtime',
            sort: '0',
            default: true
          },
          {
            label: '信誉最高',
            value: 'reputation',
            sort: '0'
          },
          {
            label: '保证金最多',
            value: 'marginmoney',
            sort: '0'
          },
          {
            label: '发布信息最多',
            value: 'totalnum',
            sort: '0'
          },
        ],
        tableHeaders: [{
            text: '状态',
            align: 'left',
            sortable: false,
            value: 'comstatus',
            constant: [true, 'status']
          },
          {
            text: '名称',
            value: 'comname',
            sortable: false,
            detail: true
          },
          {
            text: '账号',
            value: 'accountnum',
            sortable: false
          },
          {
            text: '性质',
            value: 'nature',
            sortable: false,
            constant: [true, 'nature']
          },
          {
            text: '等级',
            value: 'businesslevel',
            sortable: false
          },
          {
            text: '联系人',
            value: 'contactsname',
            sortable: false
          },
          {
            text: '电话',
            value: 'contactstel',
            sortable: false
          },
          {
            text: '地区',
            value: 'provincename',
            sortable: false
          },
          {
            text: '保证金',
            value: 'marginmoney',
            sortable: false
          },
          {
            text: '信誉',
            value: 'reputation',
            sortable: false
          },
          {
            text: '兼职',
            value: 'parttimenum',
            sortable: false
          },
          {
            text: '实习',
            value: 'practicenum',
            sortable: false
          },
          {
            text: '创建',
            value: 'createtime',
            sortable: false
          }
        ]
      },
      common: {
        type: [{
            label: '学生',
            value: 'STUDENT',
            sort: '0'
          },
          {
            label: '其他',
            value: 'OTHER',
            sort: '0'
          }
        ],
        certification: [{
            label: '学生证',
            value: 'STUDENT',
            sort: '0'
          },
          {
            label: '身份证',
            value: 'ID',
            sort: '0'
          },
          {
            label: '学生证&身份证',
            value: 'STUDENT&ID',
            sort: '0'
          },
        ],
        orderBy: [
          {
            label: '最新创建',
            value: 'STUDENT1',
            sort: '0'
          },
          {
            label: '等级最高',
            value: 'STUDENT2',
            sort: '0'
          },
          {
            label: '信誉最高',
            value: 'STUDENT3',
            sort: '0'
          },
          {
            label: '积分最高',
            value: 'STUDENT4',
            sort: '0'
          },
          {
            label: '余额最高',
            value: 'STUDENT5',
            sort: '0'
          },
        ],
        tableHeader: [{
            text: '姓名',
            align: 'left',
            sortable: false,
            value: 'name',
            sort: 0
          },
          {
            text: '手机',
            value: 'calories',
            sortable: false
          },
          {
            text: '认证',
            value: 'calories',
            sortable: false
          },
          {
            text: '性别',
            value: 'calories',
            sortable: false
          },
          {
            text: '最高学历',
            value: 'calories',
            sortable: false
          },
          {
            text: '所在地区',
            value: 'calories',
            sortable: false
          },
          {
            text: '加入战队',
            value: 'calories',
            sortable: false
          },
          {
            text: '已领取任务',
            value: 'calories',
            sortable: false
          },
          {
            text: '账户余额',
            value: 'calories',
            sortable: false
          },
          {
            text: '信誉',
            value: 'calories',
            sortable: false
          },
          {
            text: '积分',
            value: 'calories',
            sortable: false
          },
          {
            text: '经验等级',
            value: 'calories',
            sortable: false
          },
          {
            text: '创建时间',
            value: 'calories',
            sortable: false
          }
        ]
      }
    },
    system: {
      feature: {
        tableHeaders: [
          {
            text: '模块名称',
            align: 'left',
            sortable: false,
            value: 'funname'
          },
          {
            text: '路径',
            value: 'url',
            sortable: false
          },
          {
            text: '状态',
            value: 'status',
            sortable: false
          },
          {
            text: '操作',
            value: 'action',
            sortable: false
          }
        ]
      },
      role: {
        tableHeaders: [
          {
            text: '角色名',
            align: 'left',
            sortable: false,
            value: 'name',
            sort: 0
          },
          {
            text: '描述',
            value: 'remark',
            sortable: false
          },
          {
            text: '操作',
            value: 'action',
            sortable: false
          }
        ]
      }
    }
  }
};
