import axios from "@/api/axios";

export default {
  namespaced: true,

  state: {
    sites: [],
    site: false,
    loading: true,
  },

  getters: {},

  mutations: {
    GET_SITES(state, payload) {
      state.sites = payload;
    },
    LOADING_STATE(state, payload) {
      state.loading = payload;
    },
    PUSH_SITE(state, payload) {
      state.sites.data.push(payload);
    },
    GET_SITE(state, payload) {
      state.site = payload;
      state.loading = false;
    },
    DELETE_SITE(state, site) {
      let index = state.sites.data.findIndex((item) => item.id === site.id);
      state.sites.data.splice(index, 1);
    },
  },

  actions: {
    loadSites({ commit }) {
      return new Promise(() => {
        axios
          .get("/procurement-site")
          .then((response) => {
            commit("GET_SITES", response.data);
            commit("LOADING_STATE", false);
          })
          .catch((err) => {
            console.log("Error from sites: ", err);
          });
      });
    },
    loadSite({ commit }, { id }) {
      return new Promise(() => {
        axios
          .get("/procurement-site/" + id)
          .then((response) => {
            commit("GET_SITE", response.data);
            commit("LOADING_STATE", false);
          })
          .catch((err) => {
            console.log("Error from site: ", err);
          });
      });
    },
    createSite({ commit, dispatch }, data) {
      axios
        .post("/procurement-site", data)
        .then((response) => {
          // console.log("site response.data:", response.data);
          // console.log("site response:", response);
          commit("GET_SITE", response.data);
          // commit("PUSH_SITE", response.data.data);
          dispatch("loadSites", data);
        })
        .catch((error) => {
          console.log(error);
          console.log("ERRRROR createSite:: ", error.response);
        });
    },
    deleteSite({ commit }, site) {
      axios
        .delete("/procurement-site/" + site.id)
        .then(() => {
          commit("DELETE_SITE", site);
          /*if (res.data.data === 1) {

          }*/
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
