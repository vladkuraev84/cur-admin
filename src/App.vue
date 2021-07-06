<template>
  <TheHeading />
  <div class="main-wrapper">
    <template v-if="authenticated">
      <Menu />
    </template>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeading from "./components/header/TheHeading";
import Menu from "./components/Menu";
import { mapGetters } from "vuex";

export default {
  components: { TheHeading, Menu },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  /*computed: {
    ...mapGetters("global", [
      "isOpenWindowLogin",
      "isOpenWindow_add_company",
      "isOpenWindow_worker_form",
      "isOpenWindow_menu_mb_landing",
    ]),
  },*/

  setup() {},
};
</script>

<style lang="scss">
@import "./index.scss";

#nav {
  &.router-link-exact-active {
    color: #42b983;
  }
}

.main-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  // flex: 1;
}

.main {
  position: relative;
  overflow-x: auto;
  flex: 1;
  padding: 72px 30px 25px;
  // margin: 27px;
  // background-color: var(--col-bg-secondary);
}
.pseudo-project-wrp-remove {
  padding: 24px;
  width: 100%;
}
.pseudo-project-remove {
  margin: 0 23px;
  padding: 32px 40px;
  background-color: #fff;
}
</style>
