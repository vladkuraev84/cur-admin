<template>
  <div class="home text-center">
    <template v-if="!authenticated">
      <div class="container mx-auto">
        <HomeWelcome msg="Welcome to admin panel!" />
        <p>go to the login page:</p>
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>
    </template>
    <template v-else>
      <HomeWelcome msg="Hello admin!" />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import HomeWelcome from "@/components/HomeWelcome.vue";

export default {
  name: "Home",
  components: {
    HomeWelcome,
  },
  data: () => {
    return {
      test: "",
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>

<style>
.icon {
  display: inline-block;
  cursor: pointer;
  width: 50px;
  height: 50px;
}
.icon svg {
  width: 100%;
  height: 100%;
}
.icon:hover svg path {
  fill: yellow;
}
</style>
