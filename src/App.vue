<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <navigation-drawer />
    <v-main>
      <v-container class="px-4 fill-height">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default {
  name: "App",
  components: {
    NavigationDrawer,
  },
  data: () => ({
    //
  }),
};
</script>
