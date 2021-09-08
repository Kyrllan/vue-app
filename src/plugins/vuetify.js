import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#4AB403",
        nav: "#FFFFFF",
      },
      dark: {
        primary: "#006AE4",
        nav: "#303030",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});
