<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Capa_1"
    enable-background="new 0 0 515.556 515.556"
    :width="width"
    :height="height"
    :fill="iconColor"
    viewBox="0 0 515.556 515.556"
  >
    <path
      d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm128.889 290h-96.667v96.667h-64.444v-96.667h-96.667v-64.444h96.667v-96.667h64.444v96.667h96.667z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: { type: [Number, String], default: 47 },
    height: { type: [Number, String], default: 47 },
    iconColor: { type: String, default: "#007BFF" },
  },
};
</script>
