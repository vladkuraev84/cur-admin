<template>
  <div class="breadcrumbs-wrapper">
    <p><router-link to="">Project Tracking</router-link> /</p>
  </div>

  <!-- <div>Filters</div> -->

  <div class="tracking-wrapper">
    <div class="tracking">
      <TrackingColumn title="In review" :cards="inReview" />
      <TrackingColumn title="Ordered" :cards="ordered" />
      <TrackingColumn title="Shipped to Cureline" :cards="shipped" />
      <TrackingColumn title="Received" :cards="received" />
      <TrackingColumn title="Passed QC" :cards="passedQC" />
      <TrackingColumn title="Sent to Customer" :cards="sent" />
      <TrackingColumn title="Closed" :cards="closed" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import TrackingColumn from "../components/TrackingColumn.vue";

export default {
  components: { TrackingColumn },
  setup() {
    const trackingData = ref([
      {
        site: "Astrazeneca",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "",
        status: "ordered", // "inReview", "shipped", "received", "passedQC", "ordered"
      },
      {
        site: "Merck-USA",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "",
        status: "ordered",
      },
      {
        site: "Astrazeneca",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "",
        status: "inReview",
      },
      {
        site: "Astrazeneca",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "",
        status: "ordered",
      },
      {
        site: "Merck-USA",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "--3SBCCOO123456",
        status: "shipped",
      },
      {
        site: "Merck-USA",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "--3SBCCOO123456",
        status: "shipped",
      },
      {
        site: "Merck-USA",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "--3SBCCOO123456",
        status: "received",
      },
      {
        site: "Astrazeneca",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "--3SBCCOO123456",
        status: "shipped",
      },
      {
        site: "Astrazeneca",
        code: "21321-21",
        title: "Serum and EDTA plasma",
        date: "18 April 2021",
        quantity: 10,
        available: 2,
        lineId: "#301-234:MM",
        transferCode: "--3SBCCOO123456",
        status: "ordered",
      },
    ]);

    const inReview = computed(() => {
      return trackingData.value.filter((el) => el.status === "inReview");
    });

    const ordered = computed(() => {
      return trackingData.value.filter((el) => el.status === "ordered");
    });

    const shipped = computed(() => {
      return trackingData.value.filter((el) => el.status === "shipped");
    });

    const received = computed(() => {
      return trackingData.value.filter((el) => el.status === "received");
    });

    const passedQC = computed(() => {
      return trackingData.value.filter((el) => el.status === "passedQC"); // "inReview", "shipped", "received", "passedQC", "ordered"
    });

    const sent = computed(() => {
      return trackingData.value.filter((el) => el.status === "sent");
    });

    const closed = computed(() => {
      return trackingData.value.filter((el) => el.status === "closed");
    });

    return {
      trackingData,
      inReview,
      ordered,
      shipped,
      received,
      passedQC,
      sent,
      closed,
    };
  },
};
</script>

<style lang="scss" scoped>
.tracking {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  overflow-x: auto;
}
</style>
