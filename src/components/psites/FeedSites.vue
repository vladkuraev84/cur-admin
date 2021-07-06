<template>
  <AddSiteModal v-if="showAddSiteModal" @close="showAddSiteModal = false">
    <template v-slot:body>
      <div class="form">
        <form @submit.prevent="addSiteSubmit">
          <fieldset class="form-group">
            <input
              type="text"
              placeholder="Site Name"
              v-model="formSiteAdd.title"
              required
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              type="text"
              placeholder="Notes"
              v-model="formSiteAdd.description_short"
            />
          </fieldset>
          <fieldset class="form-group">
            <textarea
              type="text"
              placeholder="Description"
              v-model="formSiteAdd.description"
            />
          </fieldset>
          <!--<fieldset class="form-group">
            <input type="text" placeholder="City" v-model="formSiteAdd.city" />
          </fieldset>
          <fieldset class="form-group">
            <input
              type="text"
              placeholder="Country"
              v-model="formSiteAdd.country"
            />
          </fieldset>-->
          <button class="btn btn-submit">Sign In</button>
        </form>
      </div>
    </template>
  </AddSiteModal>

  <div class="sites-wrapper">
    <Loading v-if="loading" />

    <div class="adding-btn-wrapper">
      <button class="adding-btn" @click="initProject">
        <IconAdd />
        <p class="adding-btn-title">Add a new procurement site</p>
      </button>
    </div>

    <template v-if="sites">
      <div class="site-preview" v-for="psite in sites.data" :key="psite">
        <span class="site-avatar"><img :src="`${psite.avatar}`" alt="" /></span>
        <div class="site-preview-info">
          <div class="site-preview-info--inner">
            <h1 class="site-title">{{ psite.title }}</h1>
            <p class="site-description">{{ psite.description_short }}</p>
          </div>
          <router-link
            :to="{ name: 'PSite', params: { id: `${psite.id}` } }"
            class="btn btn-preview-link"
            >More</router-link
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Loading from "@/components/Loading";
import IconAdd from "@/modules/components/icons/IconAdd";
import AddSiteModal from "@/components/Modal";
// import IconClose from "@/modules/components/icons/IconClose";

export default {
  components: {
    Loading,
    IconAdd,
    AddSiteModal,
    // IconClose,
  },
  setup() {
    const showAddSiteModal = ref(false);
    const inProcess = ref(false);
    const formSiteAdd = ref({
      showAddSiteModal: false,
      inProcess: false,
      formSiteAdd: {
        title: "",
        avatar:
          "https://api.cureline-crm.phnapp.com/storage/avatar/default_ps.png",
        description: "",
        description_short: "",
        // city: "Kharkiv",
        // country: "Ukraine",
      },
    });

    const store = useStore();
    const sites = computed(() => store.state.site.sites);
    const loading = computed(() => store.state.site.loading);

    onMounted(() => {
      store.dispatch("site/loadSites");
    });

    const addSiteSubmit = async () => {
      await store.dispatch("site/createSite", this.formSiteAdd);
      setTimeout(() => (this.showAddSiteModal = false), 2000);
    };

    return {
      showAddSiteModal,
      inProcess,
      formSiteAdd,
      sites,
      loading,
      addSiteSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.sites-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% + 30px);
  margin: 0 -15px;
}

.site {
  &-preview {
    max-width: 200px;
    margin: 0 15px 46px;
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
  }

  &-avatar {
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 110px;
  }

  &-preview-info {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &-preview-info--inner {
    flex: 1;
  }
}
.btn-preview-link {
  margin-top: 24px;
  color: #ffffff;
  font-size: 16px;
  padding: 6px 12px;
  background: #17a2b8;

  &:hover {
    background: #17889a;
  }
}
.btn-add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  margin: 0 15px 46px;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #ffffff;

  svg {
    display: inline-block;
    margin-bottom: 15px;
  }

  &:hover {
    background-color: var(--col-bg-primary);
  }
}
</style>
