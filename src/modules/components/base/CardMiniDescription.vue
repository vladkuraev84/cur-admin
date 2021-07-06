<template>
  <div class="card" @click="goToProjectDetails(cardData.id)">
    <div class="card-header">
      <div class="card-header-name">{{ cardData.client_company }}</div>
      <div class="card-header-date">
        {{ cardData.created_at }}
      </div>
    </div>

    <div class="card-title">
      <!--<router-link
        :to="{ name: 'ProjectCreate', params: { id: `${cardData.id}` } }"
        class="btn btn-preview-link"
        >More</router-link
      >-->
      <span class="card-title-code">{{ cardData.project_number }}:</span>
      <span class="card-title-name">{{ cardData.bio_material }}</span>
    </div>

    <hr />

    <div class="card-body">
      {{ cardData.objective }}
    </div>

    <hr class="dotted" />

    <div class="card-footer">
      <span v-for="(category, i) in cardData.categories" :key="category.title"
        >{{ category.title
        }}{{ i == cardData.categories.length - 1 ? "" : ", " }}
      </span>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  props: {
    cardData: {
      type: Object,
    },
  },
  setup() {
    const goToProjectDetails = (id) => {
      router.push({
        name: "ProjectCreate",
        params: { id: `${id}` },
      });
    };
    return { goToProjectDetails };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 5px;
  padding: 20px;
  border: 1px solid var(--col-border);
  border-radius: 4px;
  max-width: 260px;
  cursor: pointer;

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

  &-body {
    font-size: 12px;
    line-height: 1.5;
    color: var(--col-primary-dark);
  }

  &-footer {
    font-size: 12px;
    color: var(--col-primary-light);
    font-family: "SFProDisplay-Medium";
  }
}
</style>
