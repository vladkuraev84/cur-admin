<template>
  <hr />
  <TheHeading title="New Project" />

  <hr />
  <div>Тут могла быть Ваша реклама</div>
  <hr />

  <div class="test-wrapper">
    <Menu />

    <div class="pseudo-project-wrp-remove">
      <div
        class="pseudo-project-remove"
        style="padding-left: 33px; padding-right: 33px"
      >
        <h3 style="padding-left: 7px">CardMiniDescriptionContainer</h3>
        <CardMiniDescriptionContainer />
      </div>

      <div class="pseudo-project-remove">
        <h3>Number of Specimens/Donors</h3>
        <ProjectLineList />
      </div>
    </div>

    <Sidebar />
  </div>
</template>

<script>
import TheHeading from "../components/TheHeading.vue";
import Menu from "../components/Menu.vue";
import Sidebar from "../components/TheSidebar.vue";
import ProjectLineList from "../components/base/ProjectLineList.vue";
import CardMiniDescriptionContainer from "../components/CardMiniDescriptionContainer.vue";

export default {
  name: "App",
  components: {
    Menu,
    Sidebar,
    TheHeading,
    CardMiniDescriptionContainer,
    ProjectLineList,
  },
};
</script>

<style lang="scss">
@import "../styles/app.scss";
.test-wrapper {
  display: flex;
  justify-content: space-between;
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
