<template>
  <div class="line">
    <button class="close-btn" @click="$emit('remove-item')" />

    <div class="line-content">
      <div class="line-header">
        <input
          type="text"
          class="line-name-input"
          v-model="name"
          placeholder=" Title"
          @blur="$emit('save-property', index, 'name', name)"
        />
        <div class="line-quantity">
          Up to:
          <input
            type="text"
            class="line-quantity-input"
            v-model="count"
            @blur="$emit('save-property', index, 'count', count)"
            style="width: 40px"
          />
          Cases
        </div>
      </div>

      <div>
        <textarea
          cols="30"
          rows="4"
          class="line-textarea"
          @blur="$emit('save-property', index, 'description', description)"
          v-model="description"
        >
        </textarea>
        <!-- {{ formattedDescription.split("\n") }} -->
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import { ref, onMounted, toRefs } from "vue";

export default {
  props: {
    line: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  emits: ["save-property", "remove-item"],
  setup(props) {
    const { nameProp, countProp, descriptionProp } = toRefs(props);

    const name = ref("");
    const count = ref("");
    const description = ref("");

    onMounted(() => {
      name.value = nameProp || "";
      count.value = countProp || "";
      description.value = descriptionProp || "";
    });
    // const formattedDescription = computed(() => {
    //   return detailsProps.value.description.reduce((total, curItem) => {
    //     return (total = total.concat("-- ", curItem, "\n"));
    //   }, "");
    // });
    //  const qweTextarea = computed({
    //   get: () => {
    //     return asus.value;
    //     // .description.reduce((total, curItem) => {
    //     //   return (total = total.concat("-- ", curItem, "\n"));
    //     // }, "");
    //   },
    //   set: (val) => {
    //     asus.value = val;
    //   },
    // })
    // const formattedDescription = computed(() => {
    //   return details.value.description.join("<br />")
    // })

    return { name, count, description };
  },
};
</script>

<style lang="scss" scoped>
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid var(--col-secondary);
  border-radius: 50%;
  background-color: transparent;

  &:hover {
    border-color: var(--col-primary-dark);

    &:after,
    &:before {
      background-color: var(--col-primary-dark);
    }
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 6px;
    width: 1px;
    height: 10px;
    padding: 0;
    margin: 0;
    transform-origin: 50% 50%;
    transform: rotate(45deg);
    background-color: var(--col-secondary);
  }

  &:before {
    transform: rotate(135deg);
  }
}

.line {
  position: relative;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--col-border);
  border-radius: 8px;
  background-color: var(--col-bg-attention);

  &-content {
    padding-right: 28px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  &-name-input,
  &-quantity-input,
  &-textarea {
    border: 1px solid var(--col-border);
    border-radius: 4px;
    color: var(--col-text-primary);
  }

  &-name-input {
    max-width: 40%;
    padding: 0 5px;
  }

  &-textarea {
    width: 100%;
    padding: 5px;
  }

  &-quantity {
    input {
      width: 50px;
      margin: 0 10px;
      text-align: center;
    }
  }

  hr {
    margin-bottom: 10px;
  }

  &:last-of-type {
    hr {
      display: none;
    }
  }
}
</style>
