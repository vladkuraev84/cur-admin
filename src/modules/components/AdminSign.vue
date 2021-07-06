<template>
  <div class="person-menu-heading">
    <div class="person-menu-heading-photo">
      <img src="" alt="" />
    </div>
    <div class="person-menu-heading-description">
      <p class="person-menu-heading-text">Arminder Singh, MD</p>
      <p class="person-menu-heading-text">Administrator</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person-menu {
  &-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-photo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background-color: var(--col-bg-primary);
    }

    &-description {
      padding: 5px;
    }

    &-text {
      font-family: "SFProDisplay-Regular", serif;
      font-weight: 400;
      font-size: 14px;
      color: var(--col-primary-dark);

      &:first-of-type {
        font-family: "SFProDisplay-Medium", serif;
        font-weight: 500;
      }
    }
  }
}
</style>
