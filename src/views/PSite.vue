<template>
  <AddUserModal v-if="showAddUserModal" @close="showAddUserModal = false">
    <template v-slot:body v-if="inProcess">
      <div class="form">
        <form @submit.prevent="addUserSubmit">
          <fieldset class="form-group">
            <input type="text" placeholder="Name" v-model="formUserAdd.name" />
          </fieldset>
          <fieldset class="form-group">
            <input
              type="text"
              placeholder="Email"
              v-model="formUserAdd.email"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              type="password"
              placeholder="Password"
              v-model="formUserAdd.password"
            />
          </fieldset>
          <button class="btn btn-submit">Sign In</button>
        </form>
      </div>
    </template>
    <template v-slot:footer v-else>
      <p>User created</p>
    </template>
  </AddUserModal>
  <Loading v-if="loading" />
  <div class="site-page" v-if="site">
    <div class="content">
      <button @click="deleteSite(psite)">Delete this site</button>
      <h1 class="title-site">{{ site.data.title }}</h1>
      <div class="site-meta">
        <div class="date">
          <span>{{ site.data.description }}</span>
        </div>
      </div>
      <div class="site-content">
        <div>
          <p>{{ site.data.body }}</p>
        </div>
      </div>
      <!--      <template v-if="site.data.lazy_projects.length > 0">-->
      <h2 class="title-projects">Projects activity:</h2>

      <div class="site-projects">
        <div
          class="site-project-preview"
          v-for="project in site.data.lazy_projects"
          :key="project"
        >
          <p class="project-num">{{ project.project_number }}</p>
          <!--            <span class="project-name>{{ project.study_name }}:</span>-->
          <div class="project-preview-info">
            <div class="project-preview-info--inner">
              <h1 class="project-title">{{ project.study_name }}</h1>
              <p class="project-description">{{ project.objective }}</p>
            </div>
            <p>{{ project.bio_material }}</p>
            <!--<router-link
                  :to="{ name: 'PSite', params: { id: `${project.id}` } }"
                  class="btn btn-preview-link"
              >More</router-link
              >-->
          </div>
        </div>
      </div>
      <!-- </template>
      <template v-else
        ><h5 class="title text-center">No projects yet!!!</h5></template
      >
      {{ site.data.lazy_projects.length }}-->
    </div>
    <div class="sidebar">
      <div class="site-avatar"><img :src="site.data.avatar" /></div>
      <div class="user-block">
        <div class="contacts">
          <p class="title-contacts">Contacts:</p>
          <button
            class="btn btn-add-user"
            @click="showAddUserModal = inProcess = true"
          >
            <IconUserAdd />
          </button>
        </div>
        <Loading v-if="loading" />
        <!--        <div class="user-preview text-center" v-for="user in site.data.users" :key="user">-->
        <div class="user-preview text-center" v-for="user in users" :key="user">
          <div class="user-preview-info">
            <button class="btn btn-delete" @click="deleteUser(user)">
              <IconClose />
            </button>
            <h4 class="user-name">{{ user.name }}</h4>
            <p class="user-description">{{ user.email }}</p>
          </div>
        </div>
        <!--<template v-if="site.data.users.length == 0"
          ><p class="text-center">No users yet!!!</p></template
        >-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AddUserModal from "@/components/Modal";
import IconUserAdd from "@/modules/components/icons/IconUserAdd";
import IconClose from "@/modules/components/icons/IconClose";
import Loading from "@/components/Loading";

export default {
  name: "Site",
  components: {
    Loading,
    AddUserModal,
    IconUserAdd,
    IconClose,
  },
  data() {
    return {
      showAddUserModal: false,
      inProcess: false,
      formUserAdd: {
        name: "",
        email: "",
        password: "",
        procurement_site_id: this.$route.params.id,
      },
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.site.loading,
      site: (state) => state.site.site,
    }),
    /*...mapState({
      users: (state) => state.user.users,
    }),*/
    ...mapGetters({ users: "user/users" }),
  },
  /*mounted() {
    this.$store.dispatch("user/fetchUsers", {
      id: this.$route.params.id,
    });
  },*/
  created() {
    this.$store.dispatch("site/loadSite", {
      id: this.$route.params.id,
    });
    this.$store.dispatch("user/fetchUsers", {
      id: this.$route.params.id,
    });
  },
  methods: {
    ...mapActions({
      addUserAction: "user/createUser",
      // refreshUsers: "user/fetchUsers",
    }),

    deleteSite(site) {
      this.$store.dispatch("site/deleteSite", site);
    },
    // const deleteSite = (site) => {
    //   store.dispatch("site/deleteSite", site);
    // };

    async addUserSubmit() {
      await this.addUserAction(this.formUserAdd).catch((error) => {
        // this.errors = error.response.data.errors;
        console.log("errors from psite component:", error);
      });
      this.inProcess = false;
      setTimeout(() => (this.showAddUserModal = false), 2000);

      this.formUserAdd.name =
        this.formUserAdd.email =
        this.formUserAdd.password =
          "";
    },
    deleteUser(user) {
      this.$store.dispatch("user/deleteUser", user);
    },
    /* addUserSubmit() {
      console.log(this.formUserAdd);
    },
    addUserSubmit(userInput) {
      this.$store.dispatch("addUser/addUser", { userInput }).then((user) => {
        this.$router.push({ name: "user", params: { slug: user.slug } });
      });
    },*/
  },
  /*data() {
    return {
      loading: true,
      site: null,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },*/
  /*created() {
    axios.get("/procurement-site/" + this.$route.params.id).then((response) => {
      this.site = response.data.data;
      this.loading = false;
    });
  },*/
  /*computed: {
    ...mapState({
      loading: (state) => state.site.loading,
      site: (state) => state.site.site,
    }),
  },
  mounted() {
    this.$store.dispatch("loadSite", {
      id: this.$route.params.id,
    });
  },*/
};
</script>
<style lang="scss" scoped>
.site-page {
  display: flex;
}
.content {
  flex: 1;
}
.sidebar {
  margin: 15px;
  max-width: 210px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
.site-projects {
  display: flex;
  flex-wrap: wrap;
}
.site-project-preview {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  max-width: 260px;
}

.user-block {
  padding: 10px;
}
.user-preview {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 15px 0px;
  padding: 24px 16px 16px;
  position: relative;
}
.btn-add-user {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--col-additional);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    transition: 0.17s all;
  }

  &:hover {
    background: #1437ff;
    svg {
      transform: scale(1.1) rotate(10deg);
    }
  }
}
.contacts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-delete {
  border-radius: 50%;
  color: red;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4px;
  top: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 5px;

  svg {
    display: inline-block;
    transition: 0.17s all;
  }

  &:hover {
    background: #ff967e99;
    svg {
      transform: scale(1.4) rotate(90deg);
    }
  }
}
</style>
