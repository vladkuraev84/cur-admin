<template>
  <div class="menu">
    <p class="small-text">Thursday April 20 2021</p>
    <ul>
      <li v-for="(item, index) in menuListAdmin" :key="index">
        <a :href="item.path">
          <component :is="item.icon" />
          <div class="menu-text">
            {{ item.name }}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import IconBell from "./icons/IconBell.vue";
import IconInfo from "./icons/IconInfo.vue";
import IconGeo from "./icons/IconGeo.vue";
import IconPeople from "./icons/IconPeople.vue";
import IconWallet from "./icons/IconWallet.vue";
import IconGem from "./icons/IconGem.vue";

export default {
  components: { IconBell, IconInfo, IconGeo, IconPeople, IconWallet, IconGem },
  setup() {
    const menuListAdmin = ref([
      {
        name: "Request Validation",
        link: "#",
        icon: "IconInfo",
      },
      { name: "Project Tracking", link: "#", icon: "IconInfo" },
      { name: "Track Shipping", link: "#", icon: "IconGeo" },
      {
        name: "Procurement Sites",
        link: "#",
        icon: "IconPeople",
      },
      {
        name: "Archived Projects",
        link: "#",
        icon: "IconWallet",
      },
    ]);

    const menuListUser = ref([
      {
        name: "Active Leads",
        link: "#",
        icon: "IconGem",
      },
      { name: "Project Tracking", link: "#", icon: "IconInfo" },
    ]);

    return { menuListAdmin, menuListUser };
  },
};
</script>

<style lang="scss" scoped>
.small-text {
  padding: 27px;
  border-bottom: 1px solid var(--col-primary-light);
  font-size: 12px;
  font-family: "SFProDisplay-Regular";
  text-align: center;
  color: var(--col-secondary);
}
.menu {
  width: 246px;
  margin-top: 5px;
  background-color: var(--col-bg-secondary);

  &-text {
    color: grey;
    font-family: "OpenSans-Semibold";
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    color: var(--col-primary);
  }
}
li {
  border-bottom: 1px solid var(--col-primary-light);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--col-bg-primary);
  }
}
li > a {
  display: flex;
  justify-content: space-between;
  padding: 16px 5px 12px 18px;
}
</style>
