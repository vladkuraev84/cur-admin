<template>
  <div>
    <h6>Visibility <span class="red">*</span></h6>

    <div
      v-for="(line, index) in lineList"
      class="line"
      :class="{ active: line.isChecked }"
      :key="index"
      @click="myFunc(index)"
    >
      <div class="line-heading">
        <component :is="line.icon" />
        <span class="line-heading-name">{{ line.text }}</span>
      </div>
      <BaseCheckbox :checked="line.isChecked" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseCheckbox from "./base/BaseCheckbox.vue";
import IconHouse from "./icons/IconHouse.vue";
import IconPeople from "./icons/IconPeople.vue";

export default {
  components: { BaseCheckbox, IconHouse, IconPeople },
  setup() {
    const lineList = ref([
      { icon: "IconPeople", text: "Anyone", isChecked: false },
      {
        icon: "IconHouse",
        text: "Select Procurement sites",
        isChecked: false,
      },
      { icon: "IconHouse", text: "Tissue bank only", isChecked: false },
    ]);

    const myFunc = (i) => {
      lineList.value.map((item) => (item.isChecked = false));
      lineList.value[i].isChecked = true;
    };

    return { lineList, myFunc };
  },
};
</script>

<style lang="scss" scoped>
.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 2px;
  color: var(--col-subtext-primary);

  &:hover,
  &.active {
    background-color: var(--col-info);
    color: var(--col-contrast-text);

    svg {
      fill: var(--col-contrast-text);
    }
  }

  &-heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &-name {
      padding-left: 10px;
    }
  }
}
</style>
