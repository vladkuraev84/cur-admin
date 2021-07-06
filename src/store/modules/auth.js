import axios from "@/api/axios";
import setToken from "@/helpers/persistanceStorage";

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null,
    token: null,
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_AUTHENTICATED(state, payload) {
      state.authenticated = payload;
    },

    SET_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      // await axios.get("/csrf-cookie");
      await axios.post("/auth/login/admin", credentials).then((res) => {
        setToken(res.data.data.token);
        localStorage.setItem("authToken", res.data.data.token);
      });
      return dispatch("me");
    },

    async signOut({ commit }) {
      await axios.post("/auth/logout").then(() => {
        window.localStorage.clear();
        localStorage.setItem("authToken", "");
        localStorage.removeItem("authToken");
        sessionStorage.clear();
        commit("SET_AUTHENTICATED", false);
        commit("SET_USER", null);
        console.log("qwe");
      });

      // return dispatch("me");
    },

    me({ commit }) {
      return axios
        .get("/me")
        .then((response) => {
          commit("SET_AUTHENTICATED", true);
          commit("SET_USER", response.data);
        })
        .catch((error) => {
          commit("SET_AUTHENTICATED", false);
          commit("SET_USER", error);
          commit("SET_USER", null);
          localStorage.removeItem("authToken");
          console.log("error from auth state:", error);
        });
    },
  },
};
// super.admin@cureline.com
// 123456
