<template>
  <button class="btn" :class="[className]" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
      require: true,
    },
    disabled: {
      type: Boolean,
      default: false,
      require: false,
    },
    className: {
      type: String,
      default: "",
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 2px;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  font-family: "SFProDisplay-Regular", serif;

  // @apply inline-block px-3 py-1 m-1 text-base rounded;

  &.big {
    display: block;
    width: 100%;
    margin: 0;
    padding: 3px 0;
    font-size: 20px;
    line-height: 30px;
  }
  /* red */
  &.error {
    color: var(--col-contrast-text);
    background-color: var(--col-error);
    border-color: var(--col-error);
  }
  /* yellow */
  &.warning {
    color: var(--col-subtext-primary);
    background-color: var(--col-warning);
    border-color: var(--col-warning);
  }
  /* green */
  &.success {
    color: var(--col-contrast-text);
    background-color: var(--col-success);
    border-color: var(--col-success);
  }
  /* turquoise */
  &.info {
    color: var(--col-contrast-text);
    background-color: var(--col-info);
    border-color: var(--col-info);
  }
  /* blue */
  &.typical {
    color: var(--col-contrast-text);
    background-color: var(--col-additional);
    border-color: var(--col-additional);
  }
  /* grey-empty */
  &.additional-bordered {
    color: var(--col-subtext-secondary);
    border-color: var(--col-subtext-secondary);
  }
  /* grey-filled */
  &.additional-filled {
    color: var(--col-contrast-text);
    background-color: var(--col-subtext-secondary);
    border-color: var(--col-subtext-secondary);
  }
  /* grey filled */
  &:disabled {
    color: #333;
    background-color: #e9ecef;
    border-color: #e9ecef;
  }
}
</style>
