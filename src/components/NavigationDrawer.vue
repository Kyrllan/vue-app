<template>
  <div>
    <v-app-bar clipped-left app color="primary" dark>
      <!--       <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon> -->
      <h2 class="py-6">APP</h2>
      <v-spacer></v-spacer>
      <!--       <div class="d-flex flex-column align-center">
        <v-btn icon @click.stop="userMenu = !userMenu" elevation="2">
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
              alt="John"
            />
          </v-avatar>
        </v-btn>
      </div> -->
      <v-btn plain >
        <v-icon color="white" left>mdi-logout-variant</v-icon>Sair
      </v-btn>
    </v-app-bar>
    <!--     <v-navigation-drawer
      absolute
      floating
      v-model="sidebarMenu"
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
      clipped
      color="nav"
      app
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

    <v-expand-transition>
      <v-card v-show="userMenu" class="avatar-card" raised>
        <div>
          <div class="ml-4 mb-6 d-flex flex-column align-start">
            <h2 class="pt-4 font-weight-light">Olá</h2>
            <h2 class="font-weight-medium">Jason Oner</h2>
          </div>
          <v-divider></v-divider>
          <div class="mb-4 d-flex justify-center">
            <div>
              <v-switch
                inset
                hide-details
                v-model="dark"
                color="primary"
                :label="dark ? 'Modo escuro' : 'Modo claro'"
              ></v-switch>
            </div>
          </div>
        </div>
      </v-card>
    </v-expand-transition> -->
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
  methods: {
    user() {
      console.log("clicou");
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