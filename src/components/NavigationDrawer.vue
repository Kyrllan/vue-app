<template>
  <div>
    <v-app-bar clipped-left app color="primary" dark>
      <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon>
      <h2>APP</h2>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
      clipped
      color="nav"
    >
      <v-list>
        <v-list-item class="d-flex justify-center">
          <v-list-item-content>
            <v-switch
              inset
              class="ml-5 pl-5"
              hide-details
              v-model="dark"
              color="primary"
              :label="dark ? 'Modo escuro' : 'Modo claro'"
            ></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="primary--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    dark: false,
    sidebarMenu: true,
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