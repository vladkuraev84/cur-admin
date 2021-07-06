<template>
  <div class="new-project-page">
    <div class="new-project-main">
      <div class="breadcrumbs-wrapper">
        <p>
          <router-link to="/project-list">Project Validation</router-link> / New
          Project
        </p>
      </div>

      <div class="new-project">
        <button @click="deleteProject(project)">delete</button>
        <div class="new-project-client">
          <h2 class="heading">New Project:</h2>

          <div class="project-number">
            <label for="project-number" class="project-number-label"
              >Project number <span class="red">*</span></label
            >
            <div class="flex" style="display: flex; align-items: center">
              <div
                contenteditable="true"
                style="
                  min-width: 50px;
                  height: auto;
                  padding: 6px 12px;
                  flex: none;
                  border: 1px solid #ced4da;
                "
              >
                {{ project.project_number.split("-")[0] }}
              </div>
              -
              <input
                type="text"
                name=""
                id="project-number"
                class="flex-3"
                :placeholder="project.project_number.split('-')[1]"
                disabled
              />
            </div>
          </div>

          <div class="study-name">
            <label for="study-name">Study Name</label>
            <input
              type="text"
              id="study-name"
              class="highlighted"
              :placeholder="project.study_name"
            />
          </div>

          <div class="сlient-сompany">
            <label for="сlient-сompany">Client Company</label>
            <input
              type="text"
              id="сlient-сompany"
              class="highlighted"
              :placeholder="project.client_company"
            />
          </div>

          <div class="сontact-name">
            <label for="сontact-name"
              >Contact Name <span class="red">*</span></label
            >
            <input
              type="text"
              id="сontact-name"
              class="highlighted"
              :placeholder="project.contact_name"
            />
          </div>

          <div class="contact-phone">
            <label for="contact-phone"
              >Contact Phone <span class="red">*</span></label
            >
            <input
              type="text"
              id="contact-phone"
              class="highlighted"
              :placeholder="project.contact_phone"
            />
          </div>

          <div class="contact-email">
            <label for="contact-email">Contact Email </label>
            <input
              type="email"
              id="contact-email"
              class="highlighted"
              :placeholder="project.contact_email"
            />
          </div>
        </div>

        <div class="field-container">
          <h4 class="heading-4">Objective <span class="red">*</span></h4>
          <NoteField :text="project.objective" />
        </div>

        <div class="field-container">
          <h4 class="heading-4">Biological Material</h4>
          <NoteField :text="project.bio_material" />
        </div>

        <div class="new-project-lines">
          <h3 class="heading-3">Number of Specimens/Donors</h3>
          <ProjectLineList />
        </div>

        <hr style="margin: 40px 0 10px" />

        <div class="new-project-fieldset">
          <div class="field-container">
            <h4 class="heading-4">Donor Characteristics</h4>
            <NoteField :text="project.donor_characteristics" />
          </div>

          <div class="field-container">
            <h4 class="heading-4">Inclusion Criteria</h4>
            <NoteField :text="project.inclusion_criteria" />
          </div>

          <div class="field-container">
            <h4 class="heading-4">Exclusion Criteria</h4>
            <NoteField :text="project.exclusion_criteria" />
          </div>

          <div class="field-container">
            <h4 class="heading-4">Preservation/Procurement</h4>
            <NoteField :text="project.preservation" />
          </div>

          <div class="field-container">
            <h4 class="heading-4">Clinical information required</h4>
            <NoteField :text="project.clinical_info" />
          </div>
        </div>

        <hr style="margin: 0 0 10px" />

        <div class="new-project-optional">
          <h4 class="heading-4">Optional:</h4>
          <h4 class="heading-4" style="margin-top: 20px">Title here</h4>
          <NoteField />
          <button class="line-add-button" @click="addLine">+ Add a line</button>
        </div>
      </div>
    </div>

    <Sidebar :text="project" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import Sidebar from "../components/newProject/Sidebar.vue";
import ProjectLineList from "../components/base/ProjectLineList.vue";
import NoteField from "../modules/components/base/NoteField.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  props: {
    /*deleteProject: {
      type: Function,
      // Unlike object or array default, this is not a factory function - this is a function to serve as a default value
      default() {
        return "Default function";
      },
    },*/
  },
  components: { Sidebar, ProjectLineList, NoteField },
  setup() {
    const store = useStore();
    const route = useRoute();
    const project = computed(() => store.state.project.project);
    store.dispatch("project/getProject", { id: route.params.id });

    const deleteProject = (project) => {
      store.dispatch("project/deleteProject", project);
    };

    onMounted(() => {
      // const id = route.params.id;
      // console.log(route.params.id);
    });

    return {
      project,
      deleteProject,
    };
  },
  /*methods: {
    deleteProject: (project) => {
      this.$store.dispatch("project/deleteProject", project);
    },
  },*/
};
</script>

<style lang="scss" scoped>
.field-container {
  padding: 10px 0 15px;
}
.heading-3 {
  padding: 6px 0;
  color: var(--col-text-secondary);
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  line-height: 24px;
}
.heading-4 {
  padding: 8px 0;
  color: var(--col-text-secondary);
  font-family: "OpenSans-Regular";
  font-size: 20px;
  line-height: 24px;
}
// move to modules:
.red {
  color: var(--col-error);
}
label,
input {
  font-size: 16px;
  line-height: 24px;
  font-family: "OpenSans-Regular";
  color: var(--col-text-secondary);
}
input {
  margin: 7px 0;
  padding: 6px 12px;
}
.highlighted {
  border: 1px solid var(--col-border);
  border-radius: 4px;
  color: var(--col-contrast-text);
  background-color: var(--col-info);

  &:active,
  &:focus,
  &:focus-visible {
    border-color: var(--col-info);
  }

  &::placeholder {
    color: #ffffff;
  }
}
.heading {
  flex-basis: 30%;
  font-size: 32px;
  font-weight: normal;
  font-family: "SFProDisplay-Medium";
}
.project-number {
  position: relative;
  flex-basis: 70%;
  padding-right: 30%;
  &-label {
    position: absolute;
    top: -20px;
    left: 0;
  }
}
.study-name,
.сlient-сompany,
.сontact-name {
  flex-basis: 30%;
}
.contact-phone,
.contact-email {
  flex-basis: 49%;
}
.new-project {
  &-main {
    display: block;
  }

  // margin: 27px;
  padding: 40px 32px;
  background-color: var(--col-bg-secondary);

  &-page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-client {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > div {
      margin: 15px 0;
    }
  }
}
.line-add-button {
  display: block;
  width: 100%;
  padding: 4px;
  border: 1px dashed var(--col-primary-light);
  border-radius: 4px;
  text-align: center;
  color: var(--col-primary-dark);
  background-color: var(--col-bg-attention);
}
</style>
