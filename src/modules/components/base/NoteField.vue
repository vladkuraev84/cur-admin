<template>
  <div>
    <h6 v-if="title">{{ title }}</h6>
    <span v-if="isApproved" class="textarea approved">{{ text }}</span>
    <span v-else class="textarea" role="textbox" contenteditable>{{
      text
    }}</span>
  </div>
</template>

<script>
import { toRefs, ref, onMounted } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
      require: false,
    },
    text: {
      type: String,
      default: "",
      require: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      require: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  setup(props) {
    const { text } = toRefs(props);
    const textArea = ref("");

    const getText = async () => {
      textArea.value = text.value;
    };

    onMounted(getText);

    return { textArea, getText };
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  display: block;
  overflow: hidden;
  resize: both;
  min-height: 40px;

  margin-bottom: 10px;
  padding: 4px 8px;
  border: 1px solid var(--col-border);
  border-radius: 4px;
  font-size: 14px;
  line-height: 2;
  color: var(--col-text-primary);
  width: 100% !important;
  max-height: 12rem;
  overflow-y: auto;

  &.approved {
    border-color: transparent;
    padding-left: 0;
    padding-right: 0;
    resize: none;
  }

  &:focus-visible {
    border: 1px solid var(--col-border);
    outline: var(--col-border) auto 1px;
  }
}

.textarea[contenteditable]:empty::before {
  content: "";
}
</style>
