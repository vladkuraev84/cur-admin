<template>
  <h6>
    {{ title }}
  </h6>
  <p v-if="isApproved">{{ formattedTypes }}</p>
  <div v-else class="buttons-block">
    <BaseButton
      v-for="(btn, index) in buttonsList"
      :text="btn.title"
      :className="btn.isChosen ? 'typical' : 'additional-bordered'"
      :key="index"
    />
  </div>
</template>

<script>
import BaseButton from "./base/BaseButton.vue";
import { toRefs, computed } from "vue";

export default {
  components: { BaseButton },
  props: {
    title: {
      type: String,
      default: "",
      require: false,
    },
    buttonsList: {
      type: Array,
      require: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  setup(props) {
    const { buttonsList } = toRefs(props);
    const filteredTypes = computed(() => {
      return buttonsList.value.filter((item) => item.isChosen === true) || [];
    });
    const formattedTypes = computed(() => {
      return filteredTypes.value.map((item) => item.title).join(" / ");
    });
    return { filteredTypes, formattedTypes };
  },
};
</script>

<style lang="scss" scoped>
.buttons-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.btn {
  margin: 4px 2px;
}
h6 {
  padding: 15px;
  text-align: center;
}
p {
  text-align: center;
}
</style>
