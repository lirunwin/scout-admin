import Vuex from 'vuex';
import Vue from 'vue';
import User from './modules/User';
import System from './modules/System';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    System
  }
});
