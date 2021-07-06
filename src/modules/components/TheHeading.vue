<template>
  <div class="heading">
    <div class="logo">
      <img src="../assets/Logo.svg" alt="logo" />
    </div>

    <h2>{{ title }}</h2>

    <AdminProfile />
  </div>
</template>

<script>
import AdminProfile from "./AdminProfile.vue";

export default {
  components: { AdminProfile },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 57px 7px 52px;
  background-color: var(--col-bg-secondary);
}
.logo {
  height: 55px;
}
</style>
