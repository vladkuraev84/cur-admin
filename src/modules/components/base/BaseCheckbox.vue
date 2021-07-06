<template>
  <div v-if="isChecked" class="ticked"></div>
  <div v-else class="empty"></div>
</template>

<script>
import { ref, onMounted, onUpdated, toRefs } from "vue";
export default {
  props: {
    checked: {
      type: Boolean,
      defaulte: false,
      required: true,
    },
  },
  setup(props) {
    const { checked } = toRefs(props);
    const isChecked = ref(false);

    const makeChose = () => {
      isChecked.value = !isChecked.value;
    };

    const getStatus = () => {
      isChecked.value = checked.value;
    };

    onMounted(getStatus);
    onUpdated(getStatus);

    return { isChecked, makeChose };
  },
};
</script>

<style lang="scss" scoped>
.empty {
  width: 24px;
  height: 24px;
  border: 2px solid var(--checkbox-border);
  border-radius: 4px;
}
.ticked {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 2px;
  border: 2px solid var(--checkbox-border);
  border-radius: 4px;
}
.ticked::before {
  position: absolute;
  left: 0;
  top: 4px;
  height: 8px;
  width: 2px;
  background-color: var(--col-bg-secondary);
  content: "";
  transform: translateX(8px) rotate(-45deg);
  transform-origin: left bottom;
}
.ticked::after {
  position: absolute;
  left: 0;
  bottom: 4px;
  display: block;
  height: 2px;
  width: 17px;
  background-color: var(--col-bg-secondary);
  content: "";
  transform: translateX(9px) rotate(-45deg);
  transform-origin: left bottom;
}
</style>
