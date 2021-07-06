<template>
  <div class="breadcrumbs-wrapper">
    <p><router-link to="">Track Shipping</router-link> /</p>
  </div>

  <div class="track-wrapper">
    <div class="track">
      <input class="track-search" type="search" name="project" />

      <div class="track-container">
        <div class="track-head">
          <h3 class="track-head-title">Shipping Date</h3>
          <p class="track-head-date">5 Jun 2021</p>
        </div>

        <div class="track-body">
          <div class="track-site">
            <div class="track-site-address">
              <div class="track-site-prefix"></div>
              <div class="track-site-address-point">Moscow, Russia</div>
            </div>

            <div class="track-site-user">
              <div class="track-site-user-photo">
                <img
                  src="https://api.cureline-crm.phnapp.com/storage/avatar/default.png"
                  alt=""
                  data-v-5c3ac7dc=""
                />
              </div>
              <div class="track-site-user-name">Tatiana Aminoff, MD</div>
            </div>
          </div>

          <div
            class="track-line"
            v-for="line in ProjectLines"
            :key="line.lineId"
          >
            <ShippingLine :line="line" />
            <hr style="margin-top: 24px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ShippingLine from "../components/ShippingLine.vue";

export default {
  components: { ShippingLine },
  setup() {
    const ProjectLines = ref([
      {
        lineId: "#301-233:MM",
        needed: [
          "K2EDTA Plasma 5 ml",
          "Serum 5 ml, aliquoted as 0.5 ml",
          "Some other Request",
        ],
        quantity: 10,
        available: 2,
        notes:
          "Et cursus bibendum turpis tincidunt pulvinar. Volutpat eleifend sit amet, id viverra accumsan leo. Tincidunt eros eget egestas consectetur sit tellus posuere. Auctor quam sagittis viverra dictumst lectus vitae ut.",
      },
      {
        lineId: "#301-234:NHL",
        needed: [
          "K2EDTA Plasma 5 ml",
          "Serum 5 ml, aliquoted as 0.5 ml",
          "Some other Request",
        ],
        quantity: 10,
        available: 2,
        notes:
          "Et cursus bibendum turpis tincidunt pulvinar. Volutpat eleifend sit amet, id viverra accumsan leo. Tincidunt eros eget egestas consectetur sit tellus posuere. Auctor quam sagittis viverra dictumst lectus vitae ut.",
      },
    ]);

    return { ProjectLines };
  },
};
</script>

<style lang="scss" scoped>
.track {
  &-wrapper {
    // margin: 25px 30px;
    border-radius: 8px;
    padding: 12px 30px;
    background-color: var(--col-bg-secondary);
  }

  &-search {
    width: 100%;
    max-width: 270px;
    padding: 6px 25px;
    border: 1px solid var(--col-border);
    border-radius: 4px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-head {
    padding-top: 24px;
    padding-bottom: 65px;

    &-title {
      padding-bottom: 6px;
      font-size: 16px;
      font-family: "SFProDisplay-Bold";
      color: var(--col-subtext-primary);
      text-align: center;
    }

    &-date {
      font-size: 14px;
      font-family: "SFProDisplay-Regular";
      color: var(--col-subtext-primary);
      text-align: center;
    }
  }

  &-body {
    width: 100%;
  }

  &-site {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;

    &-address {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &-point {
        font-size: 14px;
        font-family: "SFProDisplay-Bold";
        color: var(--col-text-secondary);
      }
    }

    &-user {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &-photo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        margin-right: 10px;
        flex: none;
        border: 5px solid var(--col-bg-attention);
        border-radius: 50%;
        background-color: var(--col-bg-primary);
      }

      &-name {
        font-size: 12px;
        font-family: "SFProDisplay-Regular";
        font-weight: 500;
        color: var(--col-primary-dark);
      }
    }

    &-prefix {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      border-radius: 4px;
      background-color: var(--col-info);
    }
  }

  &-line {
    &:last-child {
      hr {
        display: none;
      }
    }
  }
}
</style>
