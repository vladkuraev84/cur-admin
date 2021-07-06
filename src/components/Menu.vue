<template>
  <div class="menu">
    <p class="small-text">Thursday April 20 2021</p>
    <ul>
      <li v-for="item in menuListAdmin" :key="item">
        <router-link :to="{ name: `${item.link}` }">
          <div class="menu-icon-wrapper">
            <component :is="item.icon" />
            <!--            <img :src="require('@/modules/icons/' + item.icon)" alt="ic" />-->
          </div>

          <div class="menu-text">
            {{ item.name }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import IconInfo from "@/modules/components/icons/IconInfo";
import IconGeo from "@/modules/components/icons/IconGeo";
import IconWallet from "@/modules/components/icons/IconWallet";
import IconPeople from "@/modules/components/icons/IconPeople";
import AdminSign from "./header/AdminSign";

export default {
  components: {
    IconInfo,
    IconGeo,
    IconWallet,
    AdminSign,
    IconPeople,
  },
  setup() {
    const menuListAdmin = ref([
      {
        name: "Clients Requests",
        link: "ProjectList",
        icon: "IconInfo",
      },
      {
        name: "Pending Feasibility",
        link: "Feasibility",
        icon: "IconInfo",
      },
      {
        name: "Active Projects",
        link: "ActiveProjects",
        icon: "IconInfo",
      },
      {
        name: "Archived Projects",
        link: "ArchiveList",
        icon: "IconWallet",
      },
      {
        name: "Projects  Tracking",
        link: "ProjectTracking",
        icon: "IconInfo",
      },
      {
        name: "Track Shipping",
        link: "TrackShipping",
        icon: "IconGeo",
      },
      { name: "Procurement Sites", link: "PSiteList", icon: "IconPeople" },
    ]);

    return { menuListAdmin };
  },
};
</script>

<style lang="scss" scoped>
.small-text {
  width: 246px;
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
  background: #ffffff;

  &-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 24px;
    height: 20px;
  }

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
  transition: 0.17s all;

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
