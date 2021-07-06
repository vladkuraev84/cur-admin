import axios from "@/api/axios";
import router from "@/router/index";

export default {
  namespaced: true,

  state: {
    projects: [],
    project: null,
    loading: true,
  },

  getters: {
    projects: (state) => {
      return state.projects;
    },
    project: (state) => {
      return state.project;
    },
  },

  mutations: {
    SET_PROJECTS(state, payload) {
      state.projects = payload;
    },
    LOADING_STATE(state, payload) {
      state.loading = payload;
    },
    PUSH_PROJECT(state, payload) {
      state.projects.data.push(payload);
    },
    GET_PROJECT(state, payload) {
      state.project = payload;
      state.loading = false;
    },
    UPDATE_PROJECT(state, payload) {
      state.project = payload;
      state.loading = false;
    },
    DELETE_PROJECT(state, project) {
      let index = state.projects.data.findIndex(
        (item) => item.id === project.id
      );
      state.projects.data.splice(index, 1);
    },
  },

  actions: {
    async getAllProjects({ commit }) {
      await axios
        .get("/project")
        .then((response) => {
          commit("SET_PROJECTS", response.data.data);
          commit("LOADING_STATE", false);
        })
        .catch((err) => {
          console.log("Error from getAllProjects: ", err);
        });
    },
    async getProject({ commit }, { id }) {
      await axios
        .get("/project/" + id)
        .then((response) => {
          commit("GET_PROJECT", response.data.data);
          commit("LOADING_STATE", false);
        })
        .catch((err) => {
          console.log("Error from getProject: ", err);
        });
    },
    async updateProject({ id }) {
      await axios
        .get("/project/update" + id)
        .then(() => {
          // commit("GET_PROJECT", response.data.data);
          // commit("LOADING_STATE", false);
        })
        .catch((err) => {
          console.log("Error from getProject: ", err);
        });
    },
    createProject({ commit }) {
      axios
        .post("/project/")
        .then((response) => {
          commit("GET_PROJECT", response.data);
          router.push({
            name: "ProjectCreate",
            params: { id: response.data.data.id },
          });
          // router.push({ name: 'PSite', params: { id: `${response.data.id}` } }"/project-create/" + response.data.id);
          console.log("project  createProject:", response.data);
        })
        .catch((error) => {
          console.log(error);
          console.log("ERRRROR createProject:: ", error.response);
        });
    },
    deleteProject({ commit }, project) {
      console.log(project);
      axios
        .delete("/project/" + project.id)
        .then(() => {
          commit("DELETE_PROJECT", project);
          /*if (res.data.data === 1) {

          }*/
          router.push({
            name: "ProjectList",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
