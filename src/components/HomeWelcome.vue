<template>
  <div class="content-center">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeWelcome",
  props: {
    msg: String,
  },
  data: () => ({}),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
