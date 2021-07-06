<template>
  <span class="icon">
    <component
      :is="iconComponent"
      class="inline-block stroke-current"
      style=""
      role="img"
    />
  </span>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      this.name; // Trigger the name as a dependency for change detection
      return defineAsyncComponent(() =>
        import(
          /* webpackChunkName: "icon-[request]" */
          "@/modules/icons/" + this.name + ".svg"
        )
      );
    },
  },
};
</script>
