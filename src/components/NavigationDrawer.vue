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
    >
      <v-list>
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
  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
  },
};
</script>