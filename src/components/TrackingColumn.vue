<template>
  <div class="column-wrapper">
    <div class="column">
      <div class="column-bg">
        <h4 class="column-title green">{{ title }}</h4>
        <div class="column-card" v-for="(card, index) in cards" :key="index">
          <div class="column-card-head">
            <div class="column-card-code">
              <div class="column-card-code-prefix"></div>
              <div>
                {{ card.code }}
              </div>
            </div>
            <div class="column-card-date">{{ card.date }}</div>
          </div>
          <hr style="margin-top: 0" />
          <div class="column-card-body">
            <p class="column-card-body-title">{{ card.title }}</p>
            <p class="column-card-body-quantity">
              Site {{ card.quantity }}: {{ card.available }} cases
            </p>
            <p class="column-card-body-lineid">{{ card.lineId }}</p>
            <p
              v-if="card.status === 'shipped'"
              class="column-card-body-transfercode"
            >
              {{ card.transferCode }}
            </p>
            <p class="column-card-body-site">{{ card.site }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Object,
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.column {
  min-width: 210px;
  flex-basis: 100%;
  height: 100%;
  border: 1px solid var(--col-secondary-btn);
  padding: 5px;
  border-radius: 14px;
  background-color: var(--col-bg-primary);

  &-wrapper {
    margin: 5px;
  }

  &-bg {
    height: 100%;
    padding: 5px;
    border: none;
    border-radius: 14px;
    background-color: var(--col-bg-secondary);
  }

  &-title {
    font-size: 18px;
    line-height: 24px;
    font-family: "OpenSans-Semibold";
    color: var(--col-info);
  }

  &-card {
    margin: 10px 0;
    border: 1px solid var(--col-secondary-btn);
    border-radius: 4px;
    box-shadow: 1px 2px 10px #00000014, -1px 2px 10px #00000014;

    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
    }

    &-code {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 14px;
      line-height: 1.9;
      font-weight: 700;
      color: var(--col-additional);
      font-family: "SFProDisplay-Medium";

      &-prefix {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border-radius: 4px;
        background-color: var(--col-additional);
      }
    }

    &-date {
      font-size: 10px;
      color: var(--col-primary-dark);
      font-family: "SFProDisplay-Thin";
    }

    &-body {
      padding: 8px 12px;
      color: #000;

      &-title {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.9;
        color: var(--col-primary-dark);
        font-family: "SFProDisplay-Medium";
      }

      &-quantity {
        font-size: 14px;
        line-height: 1.9;
        color: var(--col-attention);
        font-family: "SFProDisplay-Medium";
      }

      &-lineid {
        font-size: 12px;
        line-height: 1.9;
        color: var(--col-secondary);
      }

      &-transfercode {
        font-size: 12px;
        line-height: 1.9;
        font-style: italic;
        color: var(--col-primary-dark);
      }

      &-site {
        font-size: 14px;
        line-height: 1.9;
        font-weight: 700;
        color: var(--col-info);
        font-family: "SFProDisplay-Medium";
      }
    }
  }
}
</style>
