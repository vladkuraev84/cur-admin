<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-name">{{ cardData.site }}</div>
      <div class="card-header-date">{{ cardData.date }}</div>
    </div>

    <div class="card-title">
      <span class="card-title-code">{{ cardData.code }}:</span>
      <span class="card-title-name">{{ cardData.title }}</span>
    </div>

    <hr />

    <div class="card-body">
      {{ cardData.content }}
    </div>

    <hr class="dotted" />

    <div class="card-footer">
      {{ cardData.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.card {
  margin: 5px;
  padding: 20px;
  border: 1px solid var(--col-border);
  border-radius: 4px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-name {
      font-size: 10px;
      color: var(--col-info);
      font-family: "SFProDisplay-Medium";
    }

    &-date {
      font-size: 10px;
      color: var(--col-primary-dark);
      font-family: "SFProDisplay-Thin";
    }
  }

  &-title {
    span {
      font-size: 14px;
      font-family: "SFProDisplay-Bold";
    }

    &-code {
      color: var(--col-additional);
    }

    &-name {
      color: var(--col-primary-dark);
    }
  }

  &-footer {
    font-size: 12px;
    color: var(--col-primary-light);
    font-family: "SFProDisplay-Medium";
  }
}
</style>
