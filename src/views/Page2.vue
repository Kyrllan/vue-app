<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-card
        class="ma-2 pa-2"
        v-for="(card, index) in cards"
        :key="index"
        width="380"
        height="200"
        :color="card.color"
      ></v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { color: "green" },
      { color: "purple" },
      { color: "blue" },
      { color: "yellow" },
      { color: "pink" },
      { color: "green" },
      { color: "purple" },
      { color: "blue" },
      { color: "yellow" },
      { color: "pink" },
      { color: "green" },
      { color: "purple" },
      { color: "blue" },
    ],
  }),
  mounted() {
    console.log("Montou pagina 2");
  },
  destroyed() {
    console.log("Destruiu pagina 2");
  },
};
</script>

