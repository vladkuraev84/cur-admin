import axios from "@/api/axios";

export default {
  namespaced: true,

  state: {
    users: [],
    user: false,
    loading: null,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
      state.loading = false;
    },
    LOADING_STATE(state, payload) {
      state.loading = payload;
    },
    FETCH_USERS(state, payload) {
      state.users = payload;
    },
    PUSH_USER(state, payload) {
      state.users.push(payload);
    },
    DELETE_USER(state, user) {
      let index = state.users.findIndex((item) => item.id === user.id);
      state.users.splice(index, 1);
    },
  },
  getters: {
    users: (state) => {
      return state.users;
    },
  },
  actions: {
    createUser({ commit }, data) {
      axios.post("/user", data).then((response) => {
        commit("SET_USER", response.data);
        // dispatch("fetchUsers", {id: data.procurement_site_id});
        commit("PUSH_USER", response.data.data);
      });
    },
    fetchUsers({ commit }, param) {
      axios
        .get("/procurement-site/" + param.id)
        .then((res) => {
          commit("FETCH_USERS", res.data.data.users);
        })
        .catch((err) => {
          console.log(err);
        });
      /*return new Promise(() => {
        axios
          .get("/procurement-site/" + id)
          .then((res) => {
            commit("FETCH_USERS", res.data.data.users);
            console.log("log from user/action/fetchUsers: ", res.data.data.users);
          })
          .catch((err) => {
            console.log(err);
          });
      });*/
    },
    deleteUser({ commit }, user) {
      axios
        .delete("/user/" + user.id)
        .then((res) => {
          if (res.data.data === 1) {
            commit("DELETE_USER", user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
