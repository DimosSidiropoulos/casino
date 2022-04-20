import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numbersPicked: [],
    ready: false,
  },
  getters: {
    getNumbers(state) {
      return state.numbersPicked;
    },
  },
  mutations: {
    setNumbers: (state, numbersPicked) => {
      state.numbersPicked = numbersPicked;
    },
    setStatus: (state, status) => {
      state.ready = status;
    },
  },
  actions: {
    addNumbers({ commit }, numbersPicked) {
      commit("setNumbers", numbersPicked);
    },
  },
  modules: {},
});
