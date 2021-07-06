<template>
  <CardMiniDescriptionContainer
    :projectList="projects"
    :initProject="initProject"
  />
</template>

<script>
// import router from "@/router";
import CardMiniDescriptionContainer from "@/modules/components/CardMiniDescriptionContainer.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ProjectList",
  components: { CardMiniDescriptionContainer },
  setup() {
    const store = useStore();
    const projects = computed(() => store.state.project.projects);
    store.dispatch("project/getAllProjects");

    const initProject = () => {
      // router.push("/project-create/" + { id });
      store.dispatch("project/createProject");
      /*this.router.go({
        name: "ProjectCreate",
        params: { id: `${id}` },
      });*/
    };

    return {
      projects,
      initProject,
    };
  },
};
</script>
