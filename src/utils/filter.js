import config from '@/config';

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

export default {
  enterprise: {
    nature: (val) => getConstantValue(val, 'nature'),
    status: (val) => getConstantValue(val, 'status'),
    checkStatus: (val) => getConstantValue(val, 'checkStatus'),
    logScoreFilterType: (val) => getConstantValue(val, 'logScoreFilters')
  }
};
