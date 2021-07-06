<template>
  <div class="person-wrapper">
    <button class="person" @click="isOpenMenu = !isOpenMenu">
      <div class="person-photo"></div>
      <IconTriangle class="arrow" />
    </button>

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
        <li @click.prevent="">
          <a href="/">
            <IconLogout />
            <div class="person-menu-text">Logout</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AdminSign from "./AdminSign.vue";
import IconBell from "./icons/IconBell.vue";
import IconGear from "./icons/IconGear.vue";
import IconMan from "./icons/IconMan.vue";
import IconLogout from "./icons/IconLogout.vue";
import IconTriangle from "./icons/IconTriangle.vue";

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
  created: function() {
    let self = this;

    window.addEventListener("click", function(e) {
      if (!self.$el.contains(e.target)) {
        self.isOpenMenu = false;
      }
    });
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
    width: 210px;
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
</style>
