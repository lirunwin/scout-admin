import config from '@/config';

let getContantValue = (val, property) => {
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
    enterpriseNature: (val) => getContantValue(val, 'nature'),
    enterpriseStatus: (val) => getContantValue(val, 'status')
  }
};
