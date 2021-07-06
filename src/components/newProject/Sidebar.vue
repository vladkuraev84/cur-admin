<template>
  <div class="sidebar">
    <h6 class="heading-6">Cureline data</h6>

    <ButtonsBlock
      title="Pathology"
      :buttons-list="buttonsList"
      :is-approved="false"
    />

    <NoteField
      style="padding: 10px 0 3px"
      title="Public note"
      :text="project.donor_characteristics"
      :isApproved="false"
    />
    <NoteField
      style="padding: 10px 0 3px"
      title="Cureline only note"
      :text="project.private_note"
      :disabled="false"
    />

    <hr class="dashed" />

    <UserAvailability />

    <hr class="dashed" style="margin-bottom: 10px" />

    <BaseButton
      class-name="light-grey big"
      style="margin-bottom: 50px"
      text="Save"
    />

    <div class="sidebar-admin-data">
      <h6 class="green center">Validated by:</h6>
      <AdminSign />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AdminSign from "../../modules/components/AdminSign.vue";
import ButtonsBlock from "../../modules/components/ButtonsBlock.vue";
import UserAvailability from "../../modules/components/UserAvailability.vue";
import NoteField from "../../modules/components/base/NoteField.vue";
import BaseButton from "../../modules/components/base/BaseButton.vue";

export default {
  components: {
    ButtonsBlock,
    UserAvailability,
    AdminSign,
    NoteField,
    BaseButton,
  },

  setup() {
    const note1 = ref("");
    const note2 = ref("");
    const store = useStore();
    const project = computed(() => store.state.project.project);
    const buttonsList = ref([
      { title: "Oncology", isChosen: true },
      { title: "Hematology", isChosen: false },
      { title: "Inflammation", isChosen: false },
      { title: "CNS Diseases", isChosen: false },
      { title: "Autoimmune diseasees", isChosen: true },
      { title: "Normal Tissues", isChosen: false },
    ]);
    return { buttonsList, note1, note2, project };
  },
};
</script>

<style lang="scss" scoped>
.heading-6 {
  font-family: "SFProDisplay-Regular", sans-serif;
  font-weight: 400;
  font-size: 12px;
}
.sidebar {
  width: 400px;
  margin-top: 27px;
  margin-right: 30px;
  padding: 15px 10px;
  border-radius: 8px;
  border: none;
  background-color: var(--col-bg-secondary);
  flex: none;

  &-admin-data {
    max-width: 180px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
}
</style>
