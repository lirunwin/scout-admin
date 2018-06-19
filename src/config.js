export default {
  projectName: '懒虫动动后台管理系统',
  baseURL:'http://192.168.1.3:8085/',
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
        status: [{
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
        level: [{
            label: '普通客户',
            value: 'level_1',
            sort: '0'
          },
          {
            label: '工资保障',
            value: 'level_2',
            sort: '0'
          },
        ],
        orderBy: [{
            label: '默认排序',
            value: 'default',
            sort: '0'
          },
          {
            label: '最新创建',
            value: 'newest',
            sort: '0'
          },
          {
            label: '信誉最高',
            value: 'score',
            sort: '0'
          },
          {
            label: '保证金最多',
            value: 'deposit',
            sort: '0'
          },
          {
            label: '发布信息最多',
            value: 'amount',
            sort: '0'
          },
        ],
        tableHeader: [{
            text: '企业状态',
            align: 'left',
            sortable: false,
            value: 'name',
            sort: 0
          },
          {
            text: '企业名称',
            value: 'calories',
            sortable: false
          },
          {
            text: '账号',
            value: 'fat',
            sortable: false
          },
          {
            text: '公司性质',
            value: 'carbs',
            sortable: false
          },
          {
            text: '企业等级',
            value: 'protein',
            sortable: false
          },
          {
            text: '联系人',
            value: 'protein',
            sortable: false
          },
          {
            text: '电话',
            value: 'cellphone',
            sortable: false
          },
          {
            text: '所在地区',
            value: 'location',
            sortable: false
          },
          {
            text: '保证金',
            value: 'deposit',
            sortable: false
          },
          {
            text: '信誉',
            value: 'score',
            sortable: false
          },
          {
            text: '发布信息',
            value: 'posts',
            sortable: false
          },
          {
            text: '创建时间',
            value: 'createTime',
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
    system:{
      tableHeader: [
        {
          text: '模块名称',
          align: 'left',
          sortable: false,
          value: 'funname',
          sort: 0
        },
        {
          text: '路径',
          value: 'url',
          sortable: false
        } ,
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
    }
  }
};
