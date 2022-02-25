<template>
  <div>
    <v-app-bar clipped-left app color="red" dark>
      <h2 class="py-6">APP</h2>
      <v-spacer></v-spacer>
      <v-btn plain>
        <v-icon color="white" left>mdi-logout-variant</v-icon>Sair
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    dark: false,
    sidebarMenu: true,
    userMenu: false,
    toggleMini: false,
    items: [
      { title: "Home", route: "/", icon: "mdi-home-outline" },
      { title: "About", route: "/about", icon: "mdi-shield-account" },
      { title: "Page 1", route: "/page-1", icon: "mdi-palette-swatch" },
      { title: "Page 2", route: "/page-2", icon: "mdi-account-search-outline" },
      { title: "Page 3", route: "/page-3", icon: "mdi-bus-clock" },
    ],
  }),
  mounted() {
    this.dark = localStorage.getItem("dark") === "true" ? true : false;
  },
  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
  },
  watch: {
    dark() {
      this.$vuetify.theme.dark = this.dark;
      localStorage.setItem("dark", this.dark);
    },
  },
};
</script>

<style scoped>
.avatar-card {
  position: absolute;
  margin-top: 70px;
  right: 10px;
  width: 250px;
  z-index: 9999;
}
</style>