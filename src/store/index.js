import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import site from "@/store/modules/site";
import user from "@/store/modules/user";
import project from "@/store/modules/project";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    site,
    user,
    project,
  },
  plugins: [createPersistedState({ storage: window.localStorage })],
});
