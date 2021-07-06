<template>
  <div>
    <h5 class="green">Project Information</h5>

    <div class="user-details-list">
      <p><b> Study:</b> {{ person.study }}</p>
      <p><b> Client:</b> {{ person.client }}</p>
      <p><b> Contact:</b> {{ person.contact }}</p>
      <p><b> Tel:</b> {{ person.tel }}</p>
      <p>
        <b> Email:</b>
        <a href="`mailto:${person.email}`" class="link">{{ person.email }}</a>
      </p>

      <div class="btn-wrapper">
        <BaseButton text="More" className="additional-filled" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  props: {
    person: {
      type: Object,
      default: () => ({
        study: "20HU-ALL6179",
        client: "Amgen",
        contact: "Roger Herwitz",
        tel: "+1415 287 8266",
        email: "Roger@amgen.com",
      }),
    },
  },
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.user-details-list {
  padding: 10px 40px 20px;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;

    b {
      font-family: "SFProDisplay-Bold";
      font-size: 14px;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: flex-end;

    button {
      padding: 2px 22px;
    }
  }
}
</style>
