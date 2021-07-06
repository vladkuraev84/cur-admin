<template>
  <svg
    :width="width"
    :height="height"
    :fill="iconColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path  d="M505.618,408.764L293.606,57.81c-17.166-28.611-58.552-28.495-75.634-0.027L6.377,408.776    c-0.005,0.009-0.011,0.018-0.016,0.027c-17.646,29.409,3.506,66.806,37.825,66.806h423.631    C502.084,475.608,523.323,438.274,505.618,408.764z M467.816,445.613H44.186c-10.966,0-17.742-11.938-12.12-21.35l211.611-351.02    c5.464-9.108,18.695-9.184,24.229,0.039l212.011,350.954C485.564,433.644,478.802,445.613,467.816,445.613z"/>
  </svg>
</template>

<script>
export default {
  props: {
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    iconColor: { type: String, default: "#828282" },
  },
};
</script>
