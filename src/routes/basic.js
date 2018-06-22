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
    component: Links
  },
  {
    path: '/basic/metro',
    name: 'Metro',
    component: Metro
  },
  {
    path: '/basic/missionTags',
    name: 'MissionTags',
    component: MissionTags
  },
  {
    path: '/basic/positions',
    name: 'Positions',
    component: Positions
  },
  {
    path: '/basic/scoreTags',
    name: 'ScoreTags',
    component: ScoreTags
  },
  {
    path: '/basic/specialTags',
    name: 'SpecialTags',
    component: SpecialTags
  },
  {
    path: '/basic/commercialDistricts',
    name: 'CommercialDistricts',
    component: CommercialDistricts
  }
];
