import Vuex from 'vuex';
import Vue from 'vue';
import User from './modules/User';
import System from './modules/System';
import Common from './modules/Common';
import Basic from './modules/Basic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    System,
    Common,
    Basic
  }
});
