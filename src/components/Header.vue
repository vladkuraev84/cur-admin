<template>
  <header class="header">
    <div class="container">
      <router-link class="logo" :to="/">Cureline CRM</router-link>
      <div class="page-name">Formated Project Specification</div>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'globalFeed' }"
            active-class="active"
            exact
            >Home</router-link
          >
        </li>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'login' }"
              active-class="active"
              >Login</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </header>
</template>

<script>
import { getterTypes } from "@/store/modules/auth";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
    // ...mapState({
    // currentUser: state => state.auth.currentUser,
    // isLoggedIn: state => state.auth.isLoggedIn
    // }),
    /*currentUser() {
        return this.$store.getters[getterTypes.currentUser]
      },
      isLoggedIn() {
        return this.$store.getters[getterTypes.isLoggedIn]
      },
      isAnonymous() {
        return this.$store.getters[getterTypes.isAnonymous]
      }*/
  },
};
</script>
