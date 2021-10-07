import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#354565",
        nav: "#FFFFFF",
        background: "#ebebeb"
      },
      dark: {
        primary: "#4AB403",
        nav: "#303030",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});
