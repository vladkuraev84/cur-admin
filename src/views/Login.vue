<template>
  <div class="auth-page">
    <div class="container mx-auto">
      <h1 class="title text-center">Sign in</h1>
      <p class="">
        <router-link :to="{ name: 'Home' }"> Go to the home page! </router-link>
      </p>
      <form @submit.prevent="onSubmit">
        <p class="text-danger" v-if="errorMessage.length > 0">
          {{ errorMessage }}
        </p>
        <fieldset class="form-group">
          <input type="text" placeholder="Email" v-model="form.email" />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </fieldset>
        <fieldset class="form-group">
          <input
            type="password"
            placeholder="Password"
            v-model="form.password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </fieldset>
        <button class="btn btn-submit" :disabled="isSubmitting">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import ValidationErrorsComponent from "@/components/ValidationErrors.vue";
export default {
  name: "Login",
  components: {
    // ValidationErrorsComponent,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        // email: "super.admin@cureline.com",
        // password: "123456",
      },
      token: localStorage.getItem("token"),
      errorMessage: "",
      errors: [],
    };
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    async onSubmit() {
      await this.signIn(this.form).catch((error) => {
        if (error.response.status === 401) {
          this.errorMessage = error.response.data.message;
        }
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
      this.$router.replace({ name: "ProjectList" });
    },
  },
};
</script>

<style scoped lang="scss">
.text-danger {
  color: red;
  font-size: 14px;
  padding: 0;
  margin: 6px 0;
}
.container {
  width: 100%;
  max-width: 300px;
}

input {
  width: 100%;
}
</style>
