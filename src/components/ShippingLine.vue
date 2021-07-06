<template>
  <div class="shipping-line">
    <div class="shipping-line-body">
      <div>
        <p class="shipping-line-lineid">{{ line.lineId }}</p>
        <p
          class="shipping-line-needs"
          v-for="(item, index) in line.needed"
          :key="index"
        >
          -- {{ item }}
        </p>
      </div>

      <div class="shipping-line-quantity">
        <div class="shipping-line-quantity-container">
          <p class="shipping-line-quantity-title"># Included</p>
          <p class="shipping-line-quantity-value">{{ line.available }}</p>
          <p class="shipping-line-quantity-text">Cases</p>
        </div>
      </div>
    </div>

    <!-- <hr style="margin-top: 2px; margin-bottom: 2px" /> -->
    <hr style="margin: 2px 0" />

    <div class="shipping-line-note">
      <h4 class="shipping-line-note-title">Notes</h4>
      <p class="shipping-line-note-text">{{ line.notes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    line: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.shipping-line {
  &-body {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 26px 0 5px;
  }

  &-lineid {
    font-size: 16px;
    font-weight: 700;
    font-family: "SFProDisplay-Regular";
  }

  &--needs {
    font-size: 14px;
    line-height: 24px;
    font-family: "OpenSans-Regular";
    color: var(--col-primary-dark);
  }

  &-quantity {
    flex-basis: 33%;
    display: flex;
    justify-content: flex-end;
    border-left: 1px solid var(--col-primary-light);

    &-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    &-title {
      font-size: 16px;
      font-family: "SFProDisplay-Bold";
      color: var(--col-subtext-primary);
    }

    &-value {
      font-size: 20px;
      line-height: 24px;
      font-family: "SFProDisplay-Bold";
      color: var(--col-info);
    }

    &-text {
      font-size: 12px;
      line-height: 20px;
      font-family: "OpenSans-Regular";
      color: var(--col-subtext-secondary);
    }
  }

  &-note {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    background-color: var(--col-bg-primary);

    &-title {
      padding: 26px 20px;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      font-family: "SFProDisplay-Regular";
      color: var(--col-subtext-primary);
    }

    &-text {
      padding: 7px 38px;
      font-style: italic;
      font-size: 12px;
      font-family: "OpenSans-Regular";
      color: var(--col-primary);
    }
  }
}
</style>
