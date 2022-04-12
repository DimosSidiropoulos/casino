import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numbersPicked: [],
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
  },
  actions: {
    addNumbers({ commit }, numbersPicked) {
      commit("setNumbers", numbersPicked);
    },
  },
  modules: {},
});
