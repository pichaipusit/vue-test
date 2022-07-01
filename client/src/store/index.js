import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  getters: {},
  mutations: {
    setEmail: (state, email) => (state.email = email),
    setPassword: (state, password) => (state.password = password),
    setFirstName: (state, firstName) => (state.firstName = firstName),
    setLastName: (state, lastName) => (state.lastName = lastName),
  },
  actions: {},
  modules: {},
});
