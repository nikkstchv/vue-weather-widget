import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import ErrorHandler from "@/models/ErrorHandler";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locationsOrder: [],
    locationsWeather: {},
    inputLocationErrorHandler: new ErrorHandler(),
    geolocationErrorHandler: new ErrorHandler(6),
  },
  mutations,
  getters,
  actions,
});
