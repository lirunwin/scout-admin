import Feature from '@/views/system/Feature';
import Role from '@/views/system/Role';
import Admins from '@/views/system/Admins';


export default  [
  {
    path: '/system/feature',
    name: 'Feature',
    component: Feature
  },
  {
    path: '/system/role',
    name: 'Role',
    component: Role
  },
  {
    path: '/system/admins',
    name: 'Admins',
    component: Admins
  }
];
