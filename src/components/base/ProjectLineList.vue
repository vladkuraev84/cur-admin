<template>
  <div class="wrapper">
    <div class="line-conteiner" v-for="(item, index) in list" :key="index">
      <ProjectLine
        :item="item"
        :index="index"
        @save-property="saveProperty"
        @remove-item="removeItem"
      />

      <hr />
    </div>

    <button class="line-add-button" @click="addLine">+ Add a line</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import ProjectLine from "./ProjectLine.vue";

export default {
  components: { ProjectLine },
  setup() {
    const list = reactive([
      {
        id: Date.parse(new Date()),
        name: "",
        count: 0,
        description: "",
      },
    ]);

    const addLine = () => {
      const length = list.length;

      list[length] = {
        id: Date.parse(new Date()),
        name: "",
        count: 0,
        description: "",
      };
      console.log(list);
    };

    const saveProperty = (index, key, value) => {
      list[index][key] = value;
    };

    const removeItem = (index) => {
      console.log(list);
      list.splice([list[index]], 1);
      console.log(list);
    };

    return { list, addLine, saveProperty, removeItem };
  },
};
</script>

<style lang="scss" scoped>
.line-add-button {
  display: block;
  width: 100%;
  padding: 4px;
  border: 1px dashed var(--col-primary-light);
  border-radius: 4px;
  text-align: center;
  color: var(--col-primary-dark);
  background-color: var(--col-bg-attention);
}
</style>
