<template>
  <div class="sidebar">
    <BaseInfo />

    <hr class="dashed" />

    <ButtonsBlock title="Pathology" :buttons-list="buttonsList"  :is-approved="true" />

    <NoteField title="Public note" :text="note1" isApproved="true" />
    <NoteField title="Cureline only note" :text="note2" :disabled="true" />

    <hr class="dotted">
<!-- 
    <div>
      <h6>Visibility</h6>
      <div>
        options
      </div>
    </div> -->
    <UserAvailability />

    <hr class="dotted">

    <BaseButton class-name="error big" text="Hematology" />

    <div style="display: flex; justify-content: center;">
      <BaseButton
        class-name="error"
        text="Delete this project"
      />
      <BaseButton
        class-name="warning"
        text="Archive this project"
        borderColor="red"
      />
    </div>

    <BaseButton
      class-name="success big"
      text="Save updates"
      borderColor="red"
    />
    <hr class="dotted" />

    <div class="sidebar-admin-data">
      <h6 class="green center">Updated by:</h6>
      <AdminSign />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AdminSign from "./AdminSign.vue";
import ButtonsBlock from "./ButtonsBlock.vue";
import UserAvailability from "./UserAvailability.vue";
import NoteField from "./base/NoteField.vue";
import BaseButton from "./base/BaseButton.vue";
import BaseInfo from "./base/BaseInfo.vue";

export default {
  components: { ButtonsBlock, UserAvailability, AdminSign, NoteField, BaseButton, BaseInfo },

  setup() {
    const note1 = ref(
      "Fully consented (surgical archive, waiver of consent specimen are not acceptable Donors with active disease from the following indications:"
    );
    const note2 = ref(
      "Porta id vestibulum massa interdum ipsum. Ut at at in nulla lectus nam fames. Ut nunc eu, ege"
    );
    const buttonsList = ref([
      { title: "Oncology", isChosen: true },
      { title: "Hematology", isChosen: false },
      { title: "Inflammation", isChosen: false },
      { title: "CNS Diseases", isChosen: false },
      { title: "Autoimmune diseasees", isChosen: true },
      { title: "Normal Tissues", isChosen: false },
    ]);
    return { buttonsList, note1, note2 };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 320px;
  background-color: var(--col-bg-secondary);
  padding: 15px 10px;
  border-radius: 8px;
  border: none;

  &-admin-data {
    max-width: 180px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
}
</style>
