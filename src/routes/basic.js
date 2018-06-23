import Links from '@/views/basic/Links';
import Metro from '@/views/basic/Metro';
import MissionTags from '@/views/basic/MissionTags';
import Positions from '@/views/basic/Positions';
import ScoreTags from '@/views/basic/ScoreTags';
import SpecialTags from '@/views/basic/SpecialTags';
import CommercialDistricts from '@/views/basic/CommercialDistricts';
export default  [
  {
    path: '/basic/links',
    name: 'ForwardLinks',
    component: Links,
    meta: {
      title: '跳转链接'
    }
  },
  {
    path: '/basic/metro',
    name: 'Metro',
    component: Metro,
    meta: {
      title: '地铁信息'
    }
  },
  {
    path: '/basic/missionTags',
    name: 'MissionTags',
    component: MissionTags,
    meta: {
      title: '任务标签'
    }
  },
  {
    path: '/basic/positions',
    name: 'Positions',
    component: Positions,
    meta: {
      title: '职位类型'
    }
  },
  {
    path: '/basic/scoreTags',
    name: 'ScoreTags',
    component: ScoreTags,
    meta: {
      title: '评分标签'
    }
  },
  {
    path: '/basic/specialTags',
    name: 'SpecialTags',
    component: SpecialTags,
    meta: {
      title: '特色分类'
    }
  },
  {
    path: '/basic/commercialDistricts',
    name: 'CommercialDistricts',
    component: CommercialDistricts,
    meta: {
      title: '商圈分类'
    }
  }
];
