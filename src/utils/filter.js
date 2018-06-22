import config from '@/config';
import constant from '@/constants'
let getConstantValue = (val, property) => {
  let constants = null;
  try {
    constants = config.constant.user.enterprise[property];
    let constant = constants.find(constant => constant.value === val);
    return constant.label || val;
  } catch (e) {
    return val;
  }
};

let getConstValue = (val, constList) => {
  try {
    let constant = constList.find(constant => constant.value === val);
    return constant.label || val;
  } catch (e) {
    return val;
  }
};
export default {
  enterprise: {
    nature: (val) => getConstantValue(val, 'nature'),
    status: (val) => getConstantValue(val, 'status'),
    checkStatus: (val) => getConstantValue(val, 'checkStatus'),
    logScoreFilterType: (val) => getConstantValue(val, 'logScoreFilters'),
  },
  constantHelper: (val, name) => {
    name = name.split('.');
    let constList = constant[name[0]][name[1]];
    return getConstValue(val, constList);
  }
};
