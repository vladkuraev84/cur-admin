<template>
  <div class="breadcrumbs-wrapper">
    <p><router-link to="">Project Validation</router-link> /</p>
  </div>

  <div class="cards-wrapper">
    <div class="cards-bg">
      <div class="cards">
        <div class="adding-btn-wrapper">
          <button class="adding-btn">
            <IconAdd />
            <p class="adding-btn-title">New project</p>
          </button>
        </div>

        <CardMiniDescription
          v-for="card in cards"
          :key="card.code"
          :card-data="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";
import CardMiniDescription from "./base/CardMiniDescription.vue";
import IconAdd from "../modules/components/icons/IconAdd.vue";

export default {
  components: {
    IconAdd,
    CardMiniDescription,
  },
  setup() {
    const cards = ref([
      {
        site: "Astrazeneca",
        code: "623-4165",
        title: "Serum and EDTA plasma",
        date: "12 April 2021",
        content:
          "Obtain serum and EDTA plasma from patients diagnosed with Non-Hodgkin's Lymphoma (NHL) and Multiple Myeloma (MM) for immunoassay development and validation",
        text: "Normal Tissue, FFPE",
      },
      {
        site: "Astrazeneca",
        code: "623-4167",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        content:
          "Obtain serum and EDTA plasma from patients diagnosed with Non-Hodgkin's Lymphoma (NHL) and Multiple Myeloma (MM) for immunoassay development and validation",
        text: "Normal Tissue, FFPE",
      },
      {
        site: "Astrazeneca",
        code: "623-4168",
        title: "Serum and EDTA plasma",
        date: "19 April 2021",
        content:
          "Obtain serum and EDTA plasma from patients diagnosed with Non-Hodgkin's Lymphoma (NHL) and Multiple Myeloma (MM) for immunoassay development and validation",
        text: "Normal Tissue, FFPE",
      },
    ]);

    const initProject = () => {
      router.push("/project-create");
    };
    return { cards, initProject };
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  // flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  // padding: 27px;
  background-color: var(--col-bg-secondary);

  & > div {
    flex-basis: 100%;
    margin: 5px 7px 20px;
  }
}
.adding-btn {
  border: 1px solid var(--col-hr);
  padding: 26px 0;
  width: 100%;
  border-radius: 4px;
  background-color: var(--col-bg-secondary);
  box-shadow: 0px 2px 2px #00000033;

  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 25%;
    width: 100%;
  }

  &-title {
    font-family: "OpenSans-SemiBold";
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
}
</style>
