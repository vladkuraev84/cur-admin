<template>
  <div class="heading">
    <div class="logo">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/logo.svg" alt="logo" />
      </router-link>
    </div>

    <template v-if="authenticated">
      <h2 class="text-center">{{ title }}</h2>
      <AdminProfile />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AdminProfile from "./AdminProfile.vue";

export default {
  components: { AdminProfile },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
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
