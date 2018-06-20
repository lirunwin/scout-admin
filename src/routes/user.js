import Enterprise from '@/views/user/Enterprise';
import Common from '@/views/user/Common';
import EnterpriseDetail from '@/views/user/EnterpriseDetail';
export default  [
  {
    path: '/user/enterprise',
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/user/common',
    name: 'Common',
    component: Common
  },
  {
    path: '/user/enterprise/:id',
    name: 'EnterpriseDetail',
    component: EnterpriseDetail
  },
];
