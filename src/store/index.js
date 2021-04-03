import { createStore } from "vuex";

export default createStore({
  state: {
    userToken: null,
    showLoader: false
  },
  mutations: {
    SET_USER_TOKEN(state, value) {
      state.userToken = value;
    },

    SET_SHOW_LOADER(state, value) {
      state.showLoader = value;
    }
  },
  actions: {},
  modules: {},
});
