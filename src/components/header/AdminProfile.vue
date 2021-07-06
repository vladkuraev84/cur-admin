<template>
  <div class="person-wrapper">
    <button class="person" @click="isOpenMenu = !isOpenMenu">
      <div class="person-photo"><img :src="`${user.avatar}`" alt="" /></div>
      <IconTriangle class="arrow" />
    </button>

    <transition name="fade">
      <div v-show="isOpenMenu" class="person-menu">
        <AdminSign />

        <hr />

        <ul>
          <li v-for="(item, index) in profileNav" :key="index">
            <a :href="item.path">
              <component :is="item.icon" />
              <div class="person-menu-text">
                {{ item.name }}
              </div>
            </a>

            <hr />
          </li>
          <li>
            <a href="#" @click.prevent="signOut">
              <IconLogout />
              <span class="person-menu-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import IconBell from "@/modules/components/icons/IconBell";
import IconGear from "@/modules/components/icons/IconGear";
import IconLogout from "@/modules/components/icons/IconLogout";
import IconMan from "@/modules/components/icons/IconMan";
import IconTriangle from "@/modules/components/icons/IconTriangle";
import AdminSign from "./AdminSign.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AdminSign,
    IconBell,
    IconGear,
    IconMan,
    IconLogout,
    IconTriangle,
  },
  setup() {
    const isOpenMenu = ref(false);
    const profileNav = ref([
      { name: "3 Events", path: "/", icon: "IconBell" },
      { name: "Settings", path: "/", icon: "IconGear" },
      { name: "My Account", path: "/", icon: "IconMan" },
    ]);
    return { isOpenMenu, profileNav };
  },
  created: function () {
    let self = this;

    window.addEventListener("click", function (e) {
      if (!self.$el.contains(e.target)) {
        self.isOpenMenu = false;
      }
    });
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    async signOut() {
      await this.signOutAction();

      this.$router.replace({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.person {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: auto;
  height: auto;
  background-color: transparent;

  &-wrapper {
    position: relative;
  }

  &-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    flex: none;
    border: 5px solid var(--col-bg-attention);
    border-radius: 50%;
    background-color: var(--col-bg-primary);
  }

  .arrow {
    transform: rotate(180deg);
  }

  &-menu {
    position: absolute;
    z-index: 2;
    right: -50%;
    top: 100%;
    min-width: 210px;
    max-width: 300px;
    margin-top: 3px;
    padding: 10px 15px 14px;
    border: 1px solid var(--col-border);
    border-radius: 7px;
    background-color: var(--col-bg-secondary);

    &:before {
      content: "";
      position: absolute;
      z-index: 2;
      right: 56px;
      top: -6px;
      width: 12px;
      height: 12px;
      border: 1px solid transparent;
      border-top-color: var(--col-border);
      border-left-color: var(--col-border);
      transform: rotate(45deg);
      background-color: var(--col-bg-secondary);
    }

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 16px 5px 12px 0;
    }

    &-text {
      padding-left: 10px;
      font-family: "SFProDisplay-Regular", serif;
      font-weight: 400;
      // line-height: 24px;
      font-size: 14px;
      color: var(--col-primary-dark);
    }

    li {
      &:hover {
        .person-menu-text {
          color: var(--col-text-secondary);
        }

        svg {
          fill: var(--col-warning);
        }
      }
      &:last-of-type hr {
        display: none;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
